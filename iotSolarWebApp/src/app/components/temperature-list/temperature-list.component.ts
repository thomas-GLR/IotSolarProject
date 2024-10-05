import { Component, OnInit } from '@angular/core';
import { TemperatureStore } from '../../store/temperature.store';
import { Temperature } from '../../models/temperature.model';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReadingDeviceName } from '../../models/readingDevice.model';

@Component({
  selector: 'app-temperature-list',
  standalone: true,
  imports: [
    AlertComponent,
    MatTableModule,
    MatSortModule,
    DatePipe,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [TemperatureStore],
  templateUrl: './temperature-list.component.html',
  styleUrl: './temperature-list.component.scss'
})
export class TemperatureListComponent implements OnInit {
  displayedColumns: string[] = ['collectionDate', 'value', 'readingDeviceName'];
  dataSource: MatTableDataSource<Temperature> = new MatTableDataSource();
  error: string = '';

  temperatures$ = this.temperatureStore.temperatures$.subscribe((temperatures) => {
    this.dataSource = new MatTableDataSource(temperatures);
  });
  error$ = this.temperatureStore.error$.subscribe((error) => {
    this.error = error ? error.message : '';
  });

  constructor(private readonly temperatureStore: TemperatureStore) {
  }

  ngOnInit() {
    this.temperatureStore.getAllTemperatures();
  }

  determinReadingDeviceName(readingDeviceName: ReadingDeviceName): string {
    switch (readingDeviceName) {
      case ReadingDeviceName.TOP: {
        return 'Haut';
      }
      case ReadingDeviceName.MIDDLE: {
        return 'Milieu'
      }
      case ReadingDeviceName.BOTTOM: {
        return 'Bas'
      }
      default: {
        return readingDeviceName
      }
    }
  }
}
