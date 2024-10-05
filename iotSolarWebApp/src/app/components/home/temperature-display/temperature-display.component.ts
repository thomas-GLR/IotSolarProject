import { Component, Input } from '@angular/core';
import { ReadingDeviceName } from "../../../models/readingDevice.model";
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-temperature-display',
  standalone: true,
    imports: [
        MatProgressSpinner,
        MatIcon,
        MatIconButton,
        RouterLink
    ],
  templateUrl: './temperature-display.component.html',
  styleUrl: './temperature-display.component.scss'
})
export class TemperatureDisplayComponent {
  @Input({ required: true }) temperatureValue!: number;
  @Input({ required: true }) readingDeviceName!: ReadingDeviceName;

  determinReadingDeviceName(): string {
    switch (this.readingDeviceName) {
      case ReadingDeviceName.TOP: {
        return 'haut';
      }
      case ReadingDeviceName.MIDDLE: {
        return 'milieu'
      }
      case ReadingDeviceName.BOTTOM: {
        return 'bas'
      }
      default: {
        return this.readingDeviceName
      }
    }
  }
}
