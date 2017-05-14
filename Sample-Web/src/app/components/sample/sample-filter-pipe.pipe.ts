import { Pipe, PipeTransform } from '@angular/core';
import { SampleViewModel } from '../../models/sample-view-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(samples: any, listFilter: any): any {
    if (listFilter && Array.isArray(samples)) {
      let filterkeys = Object.keys(listFilter);
      return samples.filter(sample =>
        filterkeys.reduce((memo, keyName) =>
          (memo && new RegExp(listFilter[keyName], 'gi').test(sample[keyName])) || listFilter[keyName] === "", true));
    } else {
      return samples;
    }
  }
}