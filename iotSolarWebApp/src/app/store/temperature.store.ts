import { ComponentStore } from "@ngrx/component-store";
import { TemperatureState } from "../models/temperature-state.model";
import { TemperaturesService } from "../services/temperatures.service";
import { inject } from "@angular/core";

export class TemperatureStore extends ComponentStore<TemperatureState> {
  private temperatureService: TemperaturesService = inject(TemperaturesService);
}
