import { Component, OnInit } from '@angular/core';
import { HomeStore } from "../../store/home.store";
import { TemperatureDisplayComponent } from "./temperature-display/temperature-display.component";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TemperatureDisplayComponent,
    AsyncPipe
  ],
  providers: [HomeStore],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  temperatures$ = this.homeStore.temperatures$;
  constructor(private readonly homeStore: HomeStore) {
  }

  ngOnInit() {
    this.homeStore.getTemperatures();
  }
}
