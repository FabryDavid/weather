import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isToday'
})
export class IsTodayPipe implements PipeTransform {
  transform(value: Date): Boolean {
    const today = new Date()
    return value.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
  }
}
