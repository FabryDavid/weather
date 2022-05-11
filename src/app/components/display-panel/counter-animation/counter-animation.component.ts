import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter-animation',
  templateUrl: './counter-animation.component.html',
  styleUrls: ['./counter-animation.component.scss']
})
export class CounterAnimationComponent implements OnInit {
  @Input() value: number = 100
  @Input() start: number = 0
  @Input() timeInterval: number = 1000

  public currentValue = 0
  private interval?: number

  constructor() {
  }

  ngOnInit(): void {
    this.startCounter()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.interval) {
      clearInterval(this.interval)
    }

    this.startCounter()
  }

  startCounter() {
    this.currentValue = this.start + (this.value % 1)
    const sleep = Math.abs(Math.floor(this.timeInterval / (this.value - this.start)));
    const self = this

    if (self.interval) {
      clearInterval(self.interval)
    }

    this.interval = setInterval(function () {
      if (self.currentValue < self.value) {
        self.currentValue++;
      } else {
        clearInterval(self.interval)
        self.currentValue = self.value
      }
    }, sleep)
  }
}
