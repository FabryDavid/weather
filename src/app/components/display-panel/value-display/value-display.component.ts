import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-value-display',
  templateUrl: './value-display.component.html',
  styleUrls: ['./value-display.component.scss']
})
export class ValueDisplayComponent implements OnInit {
  @Input() title?: String
  @Input() value?: String
  @Input() icon?: String

  constructor() {
  }

  ngOnInit(): void {
  }

}
