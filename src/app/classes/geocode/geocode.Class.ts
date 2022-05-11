export class Geocode {
  get name(): string {
    return this._name;
  }

  get state(): string | null {
    return this._state;
  }

  get lat(): Number {
    return this._lat;
  }

  get lon(): Number {
    return this._lon;
  }

  get country(): string {
    return this._country;
  }

  constructor(
    private _name: string,
    private _country: string,
    private _state: string | null,
    private _lat: Number,
    private _lon: Number,
  ) {
  }
}
