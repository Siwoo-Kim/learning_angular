import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string,filterValue:string): any {

    console.log(list);
    console.log(filterValue);

    if(!filterField || !filterValue){
      return list;
    }

    return list.filter( item => {
      const property = item[filterField].toLowerCase();
      const filter = filterValue.toLocaleLowerCase();
      return property.indexOf(filter) >= 0;
    });
  }

}
