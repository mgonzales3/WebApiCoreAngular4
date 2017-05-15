import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SampleViewModel } from '../../models/sample-view-model';
import { SampleService } from '../../services/sample.service';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-sampleinsert',
  templateUrl: './sampleinsert.component.html',
  styleUrls: ['./sampleinsert.component.css']
})
export class SampleinsertComponent implements OnInit {
  pageTitle: string = "Sample Creation"
  subscription: Subscription;
  errorMessage: string;
  barcode: any;
  createdat: any;
  sampleInserted: SampleViewModel;

  constructor(private _svc: SampleService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    
    this.subscription = this._svc.insertSample(this.sampleInserted)
      .subscribe(
      sample => console.log('OK', sample),
      error => console.log('error', <any>error));
  }

}
