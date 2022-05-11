import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Geocode} from "../../../classes/geocode/geocode.Class";
import {faCity} from '@fortawesome/free-solid-svg-icons';
import {GeocodingService} from "../../../services/geocoding.service";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() geocodingsFound: EventEmitter<Array<Geocode>> = new EventEmitter<Array<Geocode>>()

  faCity = faCity;
  searchText = ''

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

    this.geocodingService.getGeocoding(searchText).subscribe((data) => {
      this.geocodingsFound.emit(data)
    })
  }
}
