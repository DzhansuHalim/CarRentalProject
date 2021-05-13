import { Pipe, PipeTransform } from '@angular/core';
import { CarDeatils } from '../models/carDetails';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDeatils[], filterText: string): CarDeatils[] {
    filterText = filterText? filterText.toLocaleLowerCase(): "";
    return filterText?value.filter((c:CarDeatils) => c.brandName.toLocaleLowerCase().indexOf(filterText) !== -1):value;
  }
}
