import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getRemoteData(): Observable<Array<any>> {
    return this.http.get('./assets/sheetsu.json')
      .map((res: Response) => {
        return res.json();
      })
  }


}
