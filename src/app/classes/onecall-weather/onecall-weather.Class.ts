import {CurrentWeather} from "../current-weather/current-weather.Class";
import {HourlyWeather} from "../hourly-weather/hourly-weather.Class";
import {DailyWeather} from "../daily-weather/daily-weather.Class";

export class OnecallWeather {
  constructor(
    public lat: number,
    public lon: number,
    public timezoneName: string,
    public timezoneOffset: number,
    public currentWeather: CurrentWeather,
    public hourlyWeather: Array<HourlyWeather>,
    public dailyWeather: Array<DailyWeather>
  ) {
  }
}
