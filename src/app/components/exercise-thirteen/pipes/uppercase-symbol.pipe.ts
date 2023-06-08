import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase_symbol'
})
export class UppercaseSymbolPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase() + '€';
  }

}
