export class Temperature {
  constructor(
    public day: number,
    public min: number | null,
    public max: number | null,
    public night: number,
    public eve: number,
    public morn: number,
  ) {
  }
}
