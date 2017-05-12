import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SampleModelView } from '../models/sample-model-view';

@Injectable()
export class SampleService {
  private url:string = 'http://localhost:1234/api/'

  constructor(private http: Http) { }

  getSamples(): Observable<SampleModelView[]> {
    return this.http.get(this.url + 'samples')
    .map((resp: Response) => resp.json())
    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
