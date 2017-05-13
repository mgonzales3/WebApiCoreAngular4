import { Component, OnInit } from '@angular/core';

import { SampleViewModel } from '../../models/sample-view-model';
import { SampleService  } from '../../services/sample.service';

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
    samples: SampleViewModel[] = [];
    subscription: Subscription;

  constructor(private _svc: SampleService) { }

  ngOnInit() {
  }

}
