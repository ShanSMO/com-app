import { Injectable } from '@angular/core';
import { Headers, RequestOptions} from '@angular/http';
import { environment } from 'environments/environment.prod';
import {urlEndPoints} from '../shared/endPoints';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  options: any;

  constructor(private http: HttpClient) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({headers: headers});
  }

  createUser(postBody: any): Observable<any> {
    return this.http.post(environment.serverUrl + urlEndPoints.USER_REGISTER , postBody , this.options)
      .map((response) => {
        return response;
      }).catch((error) => {
        return Observable.throw(error.message || error);
      });
  }

  login(postBody: any): Observable<any> {
    return this.http.post(environment.serverUrl + urlEndPoints.USER_LOGIN , postBody , this.options)
      .map((data) => {
        return data;
      })
      .catch((error: ArrayBuffer | any) => {
        return Observable.throw(error.message || error );
      });
  }

  // loadAll(): Observable<ArrayBuffer> {
  //   return this.http.get(environment.serverUrl + urlEndPoints.LOAD_ALL_USERS)
  //     .map(data => {
  //       return data;
  //     }).catch((error: ArrayBuffer | any) => {
  //       return Observable.throw(error.message || error );
  //     });
  // }

  loadAll(page , pages): Observable<any> {
    return this.http.get(environment.serverUrl + urlEndPoints.LOAD_ALL_USERS + '?page=' + page + '&size=' + pages)
      .map( response => {
      return response;
    });
  }

  verify(body): Observable<any> {
    return this.http.post(environment.serverUrl + urlEndPoints.USER_VERIFY , body)
      .map(data => {
        return data;
      });
  }

  createProfile(body): Observable<any> {
    return this.http.post(environment.serverUrl + urlEndPoints.SAVE_USER_PROFILE , body)
      .map(data => {
        return data;
      });
  }



}
