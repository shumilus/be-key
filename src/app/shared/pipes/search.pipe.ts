import {Pipe, PipeTransform} from '@angular/core';

/**
 * @summary Search pipe
 */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, key: string, name: string) {
    if (!value || !key) {
      return value;
    }
    const keyEl = key.toLocaleLowerCase();
    const result = [];
    for (const elem of value) {
      const searchValue = elem[name].toLowerCase().indexOf(keyEl);
      if (searchValue !== -1) {
        result.push(elem);
      }
    }
    return result;
  }
}
