import {Wind} from "../wind/wind.Class";
import {WeatherInfos} from "../weather-infos/weather-infos.Class";
import {Temperature} from "../temperature/temperature.Class";
import {Weather} from "../weather/weather.Class";

export class DailyWeather extends Weather {
  constructor(
    public calculationDate: number, //dt
    public sunrise: number,
    public sunset: number,
    public moonrise: number,
    public moonSet: number,
    public moonPhase: number,
    public temp: Temperature,
    public feels_like: Temperature,
    public pressure: number,
    public humidity: number,
    // public uvIndex: number,
    public clouds: number,
    // public visibility: number,
    public wind: Wind,
    public rain: Object | null,
    public snow: Object | null,
    public weatherInfos: Array<WeatherInfos>,
  ) {
    super(calculationDate, pressure, humidity, clouds, wind, rain, snow, weatherInfos)
  }
}
