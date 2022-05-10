import {Component, Input, OnInit} from '@angular/core';
import {HourlyWeather} from "../../../../classes/hourly-weather/hourly-weather.Class";

@Component({
  selector: 'app-hour-item',
  templateUrl: './hour-item.component.html',
  styleUrls: ['./hour-item.component.scss']
})
export class HourItemComponent implements OnInit {
  @Input() hourItem?: HourlyWeather

  constructor() {
  }

  ngOnInit(): void {
  }

  isNight() {
    if (!this.hourItem) {
      return false
    }

    const hour = this.hourItem.getCalculationDate().getHours()
    return hour >= 18 || hour <= 5;
  }
}
