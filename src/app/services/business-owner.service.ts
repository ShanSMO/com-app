import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class BusinessOwnerService {

  constructor(private http: HttpClient) { }

  loadBusinessOwnerByEmail(requestBody): Observable<any> {
    return this.http.post(environment.serverUrl.concat('business-owner/load-by-user-name'), requestBody)
      .map(response => {
        return response;
      });
  }
}
