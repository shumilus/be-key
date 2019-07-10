import {Pipe, PipeTransform} from '@angular/core';

/**
 * @summary ShortenWord pipe
 */
@Pipe({
  name: 'shortenWord'
})

export class ShortenWordPipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (value && value.length > limit) {
      return value.substr(0, limit) + ' ...';
    } else {
      return value;
    }
  }
}
