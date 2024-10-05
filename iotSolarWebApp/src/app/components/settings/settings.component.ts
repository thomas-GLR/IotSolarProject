import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { environment } from '../environments/environments';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { API_PORT_STORAGE_ACCESS, API_URL_STORAGE_ACCESS } from '../../shared/constants/constants';

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
    MatLabel,
    MatButton
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {

  apiUrl!: string;
  apiPort!: number | null;

  ngOnInit() {
    const apiUrlInStorage = localStorage.getItem(API_URL_STORAGE_ACCESS);
    const apiPortInStorage = localStorage.getItem(API_PORT_STORAGE_ACCESS);
    this.apiUrl = apiUrlInStorage ? apiUrlInStorage : '';
    this.apiPort = apiPortInStorage ? Number(apiPortInStorage) : null;
  }

  saveInfo() {
    localStorage.setItem(API_URL_STORAGE_ACCESS, this.apiUrl);
    const apiPort = this.apiPort ? String(this.apiPort) : '';
    localStorage.setItem(API_PORT_STORAGE_ACCESS, apiPort);
  }
}
