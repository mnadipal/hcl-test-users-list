import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(args[0] && args[1]) {
      return value.filter(function(item){
        const column = item[args[0]];
        if(column.toLowerCase().includes(args[1].toLowerCase()))
        return value;
      });
    } else {
      return value;
    }
  }
}
