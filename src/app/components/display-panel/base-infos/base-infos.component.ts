import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-infos',
  templateUrl: './base-infos.component.html',
  styleUrls: ['./base-infos.component.scss']
})
export class BaseInfosComponent implements OnInit {
  @Input() geocodeName!: String
  @Input() calculationDate!: Date

  constructor() {
  }

  ngOnInit(): void {
  }

}
