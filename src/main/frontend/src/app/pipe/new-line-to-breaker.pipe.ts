import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newLineToBreaker'
})
export class NewLineToBreakerPipe implements PipeTransform {

  transform(value: string, args?: any): any {


    return value.replace(/(?:\r\n|\r|\n)/g, '<br />');

  }

}
