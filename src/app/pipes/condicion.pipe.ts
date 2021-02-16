import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'condicion'
})
export class CondicionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value === "new"){
      return "Nuevo";
    } else if (value === "used"){
    return "Usado";
    }
  }

}
