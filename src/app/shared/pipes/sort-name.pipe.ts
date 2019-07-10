import {Pipe, PipeTransform} from '@angular/core';

/**
 * @summary SOrt by name pipe
 */
@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {
  transform(value: any, key: string, flag?: boolean) {
    if (!value) {
      return;
    }
    if (flag) {
      value.sort( (a, b) => {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      });
      return value;
    }
    value.sort( (a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    return value;
  }
}
