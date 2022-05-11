import {Component, Input, OnInit} from '@angular/core';
import {CurrentWeather} from "../../../classes/current-weather/current-weather.Class";

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.scss']
})
export class CurrentTemperatureComponent implements OnInit {
  @Input() currentWeather!: CurrentWeather

  constructor() {
  }

  ngOnInit(): void {
  }

}
