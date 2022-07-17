import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';

@Injectable()
export class SpoonacularService {

  url: string ='http://challenge-react.alkemy.org/';

  constructor(private http: HttpClient) { }
/*
  loginByEmail(form: LoginI): Observable<ResponseI>{
return this.http.post<ResponseI>(this.url, form);

}


*/
}