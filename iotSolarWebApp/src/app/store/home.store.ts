import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";
import { TemperaturesService } from "../services/temperatures.service";
import { HomeState } from "../models/home-state.model";
import { exhaustMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Temperature } from "../models/temperature.model";

@Injectable()
export class HomeStore extends ComponentStore<HomeState> {
  constructor(private temperatureService: TemperaturesService) {
    super({temperatures: [], error: null});
  }

  readonly getTemperatures = this.effect<void>(
    (trigger$) => trigger$.pipe(
      exhaustMap(() =>
        this.temperatureService.getReadingDeviceWithLastTemperature().pipe(
          tap({
            next: (temperatures: Temperature[]) => this.addAllTemperatures(temperatures),
            error: (error: HttpErrorResponse) => this.updateError(error),
          })
        )
      )
    )
  );

  addAllTemperatures(temperatures: Temperature[]) {
    this.patchState({
      temperatures: temperatures,
      error: null
    });
  }

  updateError(error: HttpErrorResponse) {
    this.patchState((state) => ({
      ...state,
      error: error
    }));
  }

  readonly temperatures$ = this.select(state => state.temperatures);
  readonly error = this.select(state => state.error);
}
