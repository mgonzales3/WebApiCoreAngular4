import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SampleViewModel } from '../models/sample-view-model';

@Injectable()
export class SampleService {
  private url:string = 'http://localhost:60426/api/'

  constructor(private http: Http) { }

  getSamples(): Observable<SampleViewModel[]> {
    return this.http.get(this.url + 'samples')
    .map((resp: Response) => resp.json())
    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
