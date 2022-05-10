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
    this.currentValue = this.start
    const sleep = this.timeInterval / (this.value - this.start)
    const current = this

    if (current.interval) {
      clearInterval(current.interval)
    }

    this.interval = setInterval(function () {
      if (current.currentValue < current.value) {
        current.currentValue++;
      } else if (current.interval) {
        clearInterval(current.interval)
      }
    }, sleep)
  }
}
