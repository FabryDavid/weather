export class WeatherInfos {
  constructor(
    public id: Number,
    public main: string,
    public description: string,
    public icon: string,
  ) {
  }

  getIconName(): string {
    switch (this.icon) {
      // clear sky
      case '01d':
        return 'wi-day-sunny'
      case '01n':
        return 'wi-night-clear'
      // few clouds
      case '02d':
        return 'wi-day-cloudy'
      case '02n':
        return 'wi-night-alt-cloudy'
      // scattered clouds
      case '03d':
      case '03n':
        return 'wi-cloud'
      // broken clouds
      case '04d':
      case '04n':
        return 'wi-cloudy'
      // shower rain / rain
      case '09d':
      case '10d':
        return 'wi-day-rain'
      case '09n':
      case '10n':
        return 'wi-night-alt-rain'
      // thunderstorm
      case '11d':
        return 'wi-day-lightning'
      case '11n':
        return 'wi-night-alt-lightning'
      // snow
      case '13d':
        return 'wi-day-snow'
      case '13n':
        return 'wi-night-alt-snow'
      // snow
      case '50d':
      case '50n':
        return 'wi-dust'
      default:
        return ''
    }
  }
}
