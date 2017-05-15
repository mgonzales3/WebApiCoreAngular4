import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SampleViewModel } from '../../models/sample-view-model';
import { SampleService } from '../../services/sample.service';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-samplelist',
  templateUrl: './samplelist.component.html',
  styleUrls: ['./samplelist.component.css']
})
export class SamplelistComponent implements OnInit {
  pageTitle: string = "Samples List Report";
  errorMessage: string;
  dnasamples: Array<SampleViewModel>;
  subscription: Subscription;
  listFilter: any;
  webapiFilter: any;
  searchBy: any;
  model = new SampleViewModel;
  selectOptions = ['Name', 'Status(number)'];


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

  onSubmit(form: NgForm) {

    this.subscription = this._svc.filterResults(this.searchBy, this.webapiFilter)
      .subscribe(
      samples => {
        this.dnasamples = samples;
      },
      error => this.errorMessage = <any>error);
  }
}