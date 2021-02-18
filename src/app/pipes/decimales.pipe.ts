import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimales'
})
export class DecimalesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value == 0) {
      return "00";
    } else if (value < 10) {
      return "0" + value.toString();
    } else {
      return value.toString();
    }
  }

}
