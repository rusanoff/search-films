import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetter'
})
export class CapitalLetterPipe implements PipeTransform {

  transform(value: string, args?: any) {
    if (!value) {
      return value;
    }

    return value[0].toUpperCase() + value.slice(1).toLocaleLowerCase();
  }
}
