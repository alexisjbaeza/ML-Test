import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separadorMiles'
})
export class SeparadorMilesPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    return value.replace(",", ".").replace("$", "$ ");
  }

}
