import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faCity} from '@fortawesome/free-solid-svg-icons';
import {GeocodingService} from "../../services/geocoding.service";
import {Geocode} from "../../classes/geocode/geocode.Class";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() citySelected: EventEmitter<Geocode> = new EventEmitter<Geocode>()

  faCity = faCity;
  searchText = 'salgótarján'
  geocodes: Array<Geocode> = []
  selectedGeocode: Geocode | null = null
  noDataFound = false

  constructor(
    private geocodingService: GeocodingService,
  ) {
  }

  ngOnInit(): void {
  }

  searchGeocoding() {
    const searchText = this.searchText.trim()

    if (!searchText) {
      return
    }

    this.noDataFound = false

    this.geocodingService.getGeocoding(searchText).subscribe((data) => {
      this.geocodes = data

      if (data.length > 0) {
        this.itemSelect(data[0])
      } else {
        this.noDataFound = true
      }
    })
  }

  itemSelect(item: Geocode) {
    this.selectedGeocode = item
    this.citySelected.emit(this.selectedGeocode)
  }
}
