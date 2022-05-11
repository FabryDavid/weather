import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Geocode} from "../../classes/geocode/geocode.Class";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() citySelected: EventEmitter<Geocode> = new EventEmitter<Geocode>()

  geocodes: Array<Geocode> = []
  selectedGeocode: Geocode | null = null
  noDataFound = false

  constructor() {
  }

  ngOnInit(): void {
  }

  setGeocodes(geocodes: Array<Geocode>) {
    this.geocodes = geocodes

    if (this.geocodes.length > 0) {
      this.selectItem(this.geocodes[0])
    } else {
      this.noDataFound = true
    }
  }

  selectItem(item: Geocode) {
    this.selectedGeocode = item
    this.citySelected.emit(this.selectedGeocode)
  }
}
