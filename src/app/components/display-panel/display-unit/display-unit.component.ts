import {Component, OnInit} from '@angular/core';
import {TemperatureUnit} from "../../../enums/temperature-unit.Enum";
import {DisplayUnit} from "../../../classes/display-unit/display-unit";

@Component({
  selector: 'app-display-unit',
  templateUrl: './display-unit.component.html',
  styleUrls: ['./display-unit.component.scss']
})
export class DisplayUnitComponent implements OnInit {

  public displayUnit = new DisplayUnit()

  constructor() {
  }

  ngOnInit(): void {
  }

  public get DisplayUnit() {
    return TemperatureUnit
  }

  public setDisplayUnit(value: TemperatureUnit) {
    this.displayUnit.displayUnit = value
  }
}
