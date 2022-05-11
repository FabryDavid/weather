import {Component, Input, OnInit} from '@angular/core';
import {DailyWeather} from "../../../classes/daily-weather/daily-weather.Class";

@Component({
  selector: 'app-daily-display',
  templateUrl: './daily-display.component.html',
  styleUrls: ['./daily-display.component.scss']
})
export class DailyDisplayComponent implements OnInit {
  @Input() dailyWeather: Array<DailyWeather> = []

  constructor() {
  }

  ngOnInit(): void {
  }
}
