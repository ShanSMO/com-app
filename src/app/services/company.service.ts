import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import {urlEndPoints} from '../shared/endPoints';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  createCompany(companyData): Observable<any> {
    return this.http.post(environment.serverUrl + urlEndPoints.SAVE_COMPANY_PROFILE , companyData)
      .map(data => {
      return data;
    });
  }
}
