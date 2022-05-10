import {DisplayUnit} from "../display-unit/display-unit";

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

  public getDayTemperature() {
    const displayUnit = new DisplayUnit()
    return displayUnit.calculateUnit(this.day)
  }

  public getMinTemperature() {
    if (!this.min) {
      return null
    }

    const displayUnit = new DisplayUnit()
    return displayUnit.calculateUnit(this.min)
  }

  public getMaxTemperature() {
    if (!this.max) {
      return null
    }

    const displayUnit = new DisplayUnit()
    return displayUnit.calculateUnit(this.max)
  }

  public getNightTemperature() {
    const displayUnit = new DisplayUnit()
    return displayUnit.calculateUnit(this.night)
  }

  public getEveTemperature() {
    const displayUnit = new DisplayUnit()
    return displayUnit.calculateUnit(this.eve)
  }

  public getMornTemperature() {
    const displayUnit = new DisplayUnit()
    return displayUnit.calculateUnit(this.morn)
  }
}
