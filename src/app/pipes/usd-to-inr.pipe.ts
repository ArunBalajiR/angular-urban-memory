import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToINR'
})
export class UsdToINRPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value*price;
  }

}
