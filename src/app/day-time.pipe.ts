import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayTime'
})
export class DayTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
