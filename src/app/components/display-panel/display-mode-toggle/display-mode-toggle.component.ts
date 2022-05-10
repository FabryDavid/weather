import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DisplayMode} from "../../../enums/display-mode.Enum";

@Component({
  selector: 'app-display-mode-toggle',
  templateUrl: './display-mode-toggle.component.html',
  styleUrls: ['./display-mode-toggle.component.scss']
})
export class DisplayModeToggleComponent implements OnInit {
  @Output() displayModeChange: EventEmitter<DisplayMode> = new EventEmitter<DisplayMode>()

  get displayMode(): DisplayMode {
    return this._displayMode;
  }

  set displayMode(value: DisplayMode) {
    this.displayModeChange.emit(value)
    this._displayMode = value;
  }

  private _displayMode = DisplayMode.current

  constructor() {
  }

  ngOnInit(): void {
  }

  public get DisplayModeEnum() {
    return DisplayMode
  }
}
