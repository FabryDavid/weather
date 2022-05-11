import {Component, Input, OnInit} from '@angular/core';
import {CurrentWeather} from "../../../classes/current-weather/current-weather.Class";

@Component({
  selector: 'app-current-temperature-details',
  templateUrl: './current-temperature-details.component.html',
  styleUrls: ['./current-temperature-details.component.scss']
})
export class CurrentTemperatureDetailsComponent implements OnInit {
  @Input() currentWeather!: CurrentWeather

  constructor() {
  }

  ngOnInit(): void {
  }

}
