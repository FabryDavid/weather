export class Wind {
  constructor(
    public windSpeed: number,
    public windDeg: number,
    public windGust: number | null,
  ) {
  }

  public getWindSpeed() {
    return `${Math.round(this.windSpeed * 3.6)} km/h`
  }
}
