import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) return '';
    return value.replace(/-/g, ' ')
    }

}
