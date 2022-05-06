import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Geocode} from "../classes/geocode/geocode.Class";
import {catchError, map} from "rxjs/operators";
import {CurrentWeather} from "../classes/current-weather/current-weather.Class";
import {Weather} from "../classes/weather/weather.Class";
import {OnecallWeather} from "../classes/onecall-weather/onecall-weather.Class";
import {Wind} from "../classes/wind/wind.Class";
import {WeatherInfos} from "../classes/weather-infos/weather-infos.Class";
import {HourlyWeather} from "../classes/hourly-weather/hourly-weather.Class";
import {DailyWeather} from "../classes/daily-weather/daily-weather.Class";
import {Temperature} from "../classes/temperature/temperature.Class";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5'
  private apiKey = environment.apiKey
  private units = 'metric'
  private exclude = 'minutely,alerts'

  constructor(
    private http: HttpClient
  ) {
  }

  getOneCallWeather(geoCode: Geocode): Observable<OnecallWeather> {
    const params = new HttpParams()
      .set('appid', this.apiKey)
      .set('lat', geoCode.lat.toString())
      .set('lon', geoCode.lon.toString())
      .set('units', this.units)
      .set('exclude', this.exclude)

    return this.http.get<any>(`${this.apiUrl}/onecall`, {
      params,
    }).pipe(
      map(response => {
        // Current
        const currentWeatherInfos: Array<WeatherInfos> = []
        response.current.weather.forEach((info: WeatherInfos) => {
          currentWeatherInfos.push(info)
        })
        const currentWeather = new CurrentWeather(
          response.current.dt,
          response.current.sunrise,
          response.current.sunset,
          response.current.temp,
          response.current.feels_like,
          response.current.pressure,
          response.current.humdidity,
          response.current.uvi,
          response.current.clouds,
          response.current.visibility,
          new Wind(
            response.current.wind_speed,
            response.current.wind_deg,
            response.current.wind_gust
          ),
          response.current.rain,
          response.current.snow,
          currentWeatherInfos
        )

        // Hourly
        const hourlyWeathers: Array<HourlyWeather> = []
        response.hourly.forEach((item: any) => {
          const weatherInfos: Array<WeatherInfos> = []

          item.weather.forEach((info: WeatherInfos) => {
            weatherInfos.push(info)
          })


          hourlyWeathers.push(
            new HourlyWeather(
              item.id,
              item.temp,
              item.feels_like,
              item.pressure,
              item.humidity,
              item.uvi,
              item.clouds,
              item.visibility,
              new Wind(
                item.wind_speed,
                item.wind_deg,
                item.wind_gust
              ),
              item.rain,
              item.snow,
              weatherInfos
            )
          )
        })

        // Daily
        const dailyWeathers: Array<DailyWeather> = []
        response.daily.forEach((item: any) => {
          const weatherInfos: Array<WeatherInfos> = []

          item.weather.forEach((info: WeatherInfos) => {
            weatherInfos.push(info)
          })


          dailyWeathers.push(
            new DailyWeather(
              item.id,
              item.sunrise,
              item.sunset,
              item.moonrise,
              item.moonset,
              item.moon_phase,
              new Temperature(
                item.day,
                item.min,
                item.max,
                item.night,
                item.eve,
                item.morn,
              ),
              new Temperature(
                item.day,
                null,
                null,
                item.night,
                item.eve,
                item.morn,
              ),
              item.pressure,
              item.humidity,
              item.clouds,
              new Wind(
                item.wind_speed,
                item.wind_deg,
                item.wind_gust
              ),
              item.rain,
              item.snow,
              weatherInfos
            )
          )
        })

        return new OnecallWeather(
          response.lat,
          response.lon,
          response.timezone,
          response.timezone_offset,
          currentWeather,
          hourlyWeathers,
          dailyWeathers
        )
      }),
      catchError(this.handleError.bind(this))
    )
  }

  public handleError(err: HttpErrorResponse, caught: Observable<any>): Observable<any> {
    return throwError(err);
  }
}
