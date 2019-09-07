import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerBranchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =   (val.Branch.toLocaleLowerCase().includes(args));
      return rVal;
    })

}}

