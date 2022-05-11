import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Geocode} from "../../../classes/geocode/geocode.Class";

@Component({
  selector: 'app-geocodes-table',
  templateUrl: './geocodes-table.component.html',
  styleUrls: ['./geocodes-table.component.scss']
})
export class GeocodesTableComponent implements OnInit {
  @Output() selectItem: EventEmitter<Geocode> = new EventEmitter<Geocode>()

  @Input() geocodes: Array<Geocode> = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
