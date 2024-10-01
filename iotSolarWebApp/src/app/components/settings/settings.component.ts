import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { environment } from "../environments/environments";
import { MatIconButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    FormsModule,
    MatInput,
    MatLabel
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  apiUrl: string = environment.apiUrl;
  apiPort: number | null = environment.apiPort;
}
