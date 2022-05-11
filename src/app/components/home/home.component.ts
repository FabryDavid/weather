import {Component, OnInit} from '@angular/core';
import {Geocode} from "../../classes/geocode/geocode.Class";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public geocode?: Geocode

  constructor() {
  }

  ngOnInit(): void {
  }

}
