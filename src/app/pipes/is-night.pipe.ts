import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isNight'
})
export class IsNightPipe implements PipeTransform {
  transform(value: Date): Boolean {
    const hour = value.getHours()
    return hour >= 18 || hour <= 5;
  }
}
