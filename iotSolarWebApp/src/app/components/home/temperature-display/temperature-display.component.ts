import { Component, Input } from '@angular/core';
import { ReadingDeviceName } from "../../../models/readingDevice.model";

@Component({
  selector: 'app-temperature-display',
  standalone: true,
  imports: [],
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
    }
  }
}
