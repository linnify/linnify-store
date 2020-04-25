import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricey'
})
export class PriceyPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value + args[0];
  }

}
