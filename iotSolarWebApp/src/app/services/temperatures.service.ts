import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { ITemperature, Temperature } from "../models/temperature.model";

@Injectable({
  providedIn: 'root'
})
export class TemperaturesService {

  private http = inject(HttpClient);

  getReadingDeviceWithLastTemperature() {
    return this.http.get<Temperature[]>(`http://localhost:3000/temperatures/last-temperatures`).pipe(
      map((response) => response
        .map((dto: ITemperature) => new Temperature(dto))
    ));
  }
}
