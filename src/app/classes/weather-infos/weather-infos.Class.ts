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
        return 'clear-day.svg'
      case '01n':
        return 'clear-night.svg'
      // few clouds
      case '02d':
        return 'overcast-day.svg'
      case '02n':
        return 'overcast-night.svg'
      // scattered clouds
      case '03d':
      case '03n':
        return 'cloudy.svg'
      // broken clouds
      case '04d':
      case '04n':
        return 'overcast.svg'
      // shower rain / rain
      case '09d':
      case '09n':
        return 'rain.svg'
      case '10d':
        return 'partly-cloudy-day-rain.svg'
      case '10n':
        return 'partly-cloudy-night-rain.svg'
      // thunderstorm
      case '11d':
        return 'thunderstorms-day.svg'
      case '11n':
        return 'thunderstorms-night.svg'
      // snow
      case '13d':
        return 'partly-cloudy-day-snow.svg'
      case '13n':
        return 'partly-cloudy-night-snow.svg'
      // snow
      case '50d':
      case '50n':
        return 'mist.svg'
      default:
        return ''
    }
  }
}
