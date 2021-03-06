import {Wind} from "../wind/wind.Class";
import {WeatherInfos} from "../weather-infos/weather-infos.Class";

export class Weather {
  constructor(
    public calculationDate: number, //dt
    public pressure: number,
    public humidity: number,
    public clouds: number,
    public wind: Wind,
    public rain: Object | null,
    public snow: Object | null,
    public weatherInfos: Array<WeatherInfos>,
  ) {
  }

  public convertUtcDate(utcSeconds: number) {
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d
  }

  public getCalculationDate() {
    return this.convertUtcDate(this.calculationDate)
  }
}
