import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeWhitespace'
})
export class RemoveWhitespacePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return '';
    return value.replace(/\s/g, '');

  }

}
