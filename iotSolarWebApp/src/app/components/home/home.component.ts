import { Component, OnInit } from '@angular/core';
import { TemperatureDisplayComponent } from './temperature-display/temperature-display.component';
import { AsyncPipe } from '@angular/common';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { Temperature } from '../../models/temperature.model';
import { TemperatureStore } from '../../store/temperature.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TemperatureDisplayComponent,
    AsyncPipe,
    AlertComponent
  ],
  providers: [TemperatureStore],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  temperatures: Temperature[] = [];
  error: string = '';

  temperatures$ = this.temperatureStore.temperatures$.subscribe((temperatures) => {
    this.temperatures = temperatures;
  });
  error$ = this.temperatureStore.error$.subscribe((error) => {
    this.error = error ? error.message : '';
  });

  constructor(private readonly temperatureStore: TemperatureStore) {
  }

  ngOnInit() {
    this.temperatureStore.getLastTemperaturesFromReadingDevice();
  }
}
