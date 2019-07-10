
import {Pipe, PipeTransform} from '@angular/core';

/**
 * @summary Search pipe
 */
@Pipe({
  name: 'numberFormat',
  pure: true
})

export class NumberFormatPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return value;
    }
    value = (value + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return value;
  }
}

