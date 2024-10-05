import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatSuffix } from '@angular/material/form-field';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatSuffix
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnChanges{
  @Input() messageAlert: string = '';
  showAlert: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messageAlert'].currentValue !== '') {
      this.showAlert = true;
    }
  }
}
