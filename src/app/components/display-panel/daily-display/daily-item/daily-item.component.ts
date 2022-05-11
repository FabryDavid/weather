import {Component, Input, OnInit} from '@angular/core';
import {DailyWeather} from "../../../../classes/daily-weather/daily-weather.Class";

@Component({
  selector: 'app-daily-item',
  templateUrl: './daily-item.component.html',
  styleUrls: ['./daily-item.component.scss']
})
export class DailyItemComponent implements OnInit {
  @Input() dailyItem?: DailyWeather

  constructor() {
  }

  ngOnInit(): void {
  }
}
