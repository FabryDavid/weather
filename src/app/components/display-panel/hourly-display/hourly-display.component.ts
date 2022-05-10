import {Component, Input, OnInit} from '@angular/core';
import {HourlyWeather} from "../../../classes/hourly-weather/hourly-weather.Class";

@Component({
  selector: 'app-hourly-display',
  templateUrl: './hourly-display.component.html',
  styleUrls: ['./hourly-display.component.scss']
})
export class HourlyDisplayComponent implements OnInit {
@Input() hourlyWeather:Array<HourlyWeather>=[]

  constructor() { }

  ngOnInit(): void {
  }

}
