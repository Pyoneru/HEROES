import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idNaN'
})
export class IdNaNPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return null;
  }

}
