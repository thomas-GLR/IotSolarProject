import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { ITemperature, Temperature } from "../models/temperature.model";
import { environment } from '../components/environments/environments';
import { API_PORT_STORAGE_ACCESS, API_URL_STORAGE_ACCESS } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TemperaturesService {

  private http = inject(HttpClient);
  // private commonUrl: string = `${localStorage.getItem(API_URL_STORAGE_ACCESS)}:${localStorage.getItem(API_PORT_STORAGE_ACCESS)}`;
  private commonUrl: string = `https://iot-solar-api.vercel.app`;

  getReadingDeviceWithLastTemperature(): Observable<Temperature[]> {
    return this.http.get<Temperature[]>(`${this.commonUrl}/temperatures/last-temperatures`).pipe(
      map((response) => response
        .map((dto: ITemperature) => new Temperature(dto))
    ));
  }

  getAllTemperatures(): Observable<Temperature[]> {
    return this.http.get<Temperature[]>(`${this.commonUrl}/temperatures`).pipe(
      map((response) => response
        .map((dto: ITemperature) => new Temperature(dto))
      ));
  }
}
