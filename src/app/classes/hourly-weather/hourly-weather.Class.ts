import {WeatherInfos} from "../weather-infos/weather-infos.Class";
import {Wind} from "../wind/wind.Class";
import {Weather} from "../weather/weather.Class";
import {DisplayUnit} from "../display-unit/display-unit";

export class HourlyWeather extends Weather {
  constructor(
    public calculationDate: number, //dt
    public temp: number,
    public feels_like: number,
    public pressure: number,
    public humidity: number,
    public uvIndex: number,
    public clouds: number,
    public visibility: number,
    public wind: Wind,
    public rain: Object | null,
    public snow: Object | null,
    public weatherInfos: Array<WeatherInfos>
  ) {
    super(calculationDate, pressure, humidity, clouds, wind, rain, snow, weatherInfos)
  }

  public getTemperature() {
    const displayUnit = new DisplayUnit()
    return displayUnit.calculateUnit(this.temp)
  }
}
