import { Component, OnInit } from '@angular/core';

import { SampleViewModel } from '../../models/sample-view-model';
import { SampleService } from '../../services/sample.service';
//import { SampleFilterPipe } from './sample-filter-pipe.pipe';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  pageTitle: string = "Samples Report By Status";
  errorMessage: string;  
  dnasamples: Array<SampleViewModel>;
  subscription: Subscription;
  listFilter: any;
  webapiFilter: any;

  constructor(private _svc: SampleService) {
    
   }

  ngOnInit() {
    
    this.subscription = this._svc.getSamples()
      .subscribe(
      samples => {
        this.dnasamples = samples;
      },
      error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
