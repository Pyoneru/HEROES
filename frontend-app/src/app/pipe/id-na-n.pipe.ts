import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idNaN'
})
export class IdNaNPipe implements PipeTransform {

  badNumberSymbol: string = '-';

  transform(value: number, ...args: unknown[]): string {

    if(value == null){
      return this.badNumberSymbol;
    }

    if(isNaN(value)){
      return this.badNumberSymbol;
    }

    if(value < 0){
      return this.badNumberSymbol;
    }

    return String(value);
  }

}
