import {TemperatureUnit} from "../../enums/temperature-unit.Enum";

export class DisplayUnit {
  private static storageKey = "displayUnit"

  get displayUnit(): TemperatureUnit {
    const storageItem: string | null = localStorage.getItem(DisplayUnit.storageKey)

    if (storageItem) {
      return storageItem as unknown as TemperatureUnit;
    }

    return TemperatureUnit.celsius
  }

  set displayUnit(value: TemperatureUnit) {
    localStorage.setItem(DisplayUnit.storageKey, value.toString())
  }

  constructor() {
  }

  public calculateUnit(value: number) {
    if (this.displayUnit === TemperatureUnit.celsius) {
      return parseFloat(value.toFixed(1))
    }

    return parseFloat(((value * 1.8) + 32).toFixed(1))
  }
}
