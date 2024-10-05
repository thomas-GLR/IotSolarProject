import { Routes } from '@angular/router';
import { SettingsComponent } from "./components/settings/settings.component";
import { TemperatureListComponent } from "./components/temperature-list/temperature-list.component";
import { ActionsComponent } from "./components/actions/actions.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'parametre', component: SettingsComponent },
  { path: 'temperatures', component: TemperatureListComponent },
  { path: 'action', component: ActionsComponent },
  { path: '**', redirectTo: 'accueil' }
];
