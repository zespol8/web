import {Pipe, PipeTransform} from '@angular/core';
import {isNumber} from 'util';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNumber(value)) {
      if (value < 10) {
        return '0' + value;
      }
      return value;
    }
    return value;
  }

}
