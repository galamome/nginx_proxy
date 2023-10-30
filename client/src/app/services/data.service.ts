import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const fooapiRoute = "foo-api";
const barapiRoute = "bar-api";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  getServer1Data(): Observable<object> {
    return this.http.get(`/${fooapiRoute}/`);
  }

  getServer2Data(): Observable<object> {
    return this.http.get(`/${barapiRoute}/`);
  }
}
