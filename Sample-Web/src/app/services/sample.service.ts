import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SampleViewModel } from '../models/sample-view-model';

@Injectable()
export class SampleService {
  private url: string = 'http://localhost:60426/api/'

  constructor(private http: Http) { }

  getSamples(): Observable<SampleViewModel[]> {
    return this.http.get(this.url + 'samples')
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  }

  filterResults(searchBy: string, webapiFilter: string) {
    if (searchBy === 'Name') {
      return this.getSampleByUser(webapiFilter);
    } else {
      return this.getSampleByStatus(webapiFilter)
    }
  }

  getSampleByStatus(status: string): Observable<SampleViewModel[]> {
    return this.http.get(this.url + 'samples/status/' + status)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  }

  getSampleByUser(user: string): Observable<SampleViewModel[]> {
    return this.http.get(this.url + 'samples/user/' + user)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  }

  insertSample(sample: SampleViewModel): Observable<any> {
    let body = JSON.stringify(sample);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });

    return this.http.post(this.url + 'samples', body, options)
      .map(this.getResponse)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  private getResponse(res: Response) {
    let body = res.json();
    return body.fields || {};
  }
}
