import {Component, Input, OnInit} from '@angular/core';
import {Geocode} from "../../classes/geocode/geocode.Class";
import {OnecallWeather} from "../../classes/onecall-weather/onecall-weather.Class";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.scss']
})
export class DisplayPanelComponent implements OnInit {
  public onecallWeather?: OnecallWeather

  private _geocode?: Geocode

  @Input() set geocode(value: Geocode | undefined) {

    this._geocode = value;
    this.getWeatherInfos();

  }

  get geocode(): Geocode | undefined {
    return this._geocode;
  }

  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.getWeatherInfos()
  }

  getWeatherInfos() {
    if (!this.geocode) {
      return
    }

    this.weatherService.getOneCallWeather(this.geocode).subscribe((data) => {
      this.onecallWeather = data
    })
  }
}
