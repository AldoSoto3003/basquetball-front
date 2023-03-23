import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../interfaces/login.interface';
import { ResponseI } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://127.0.0.1:90/api/auth/login";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<any>{
    let direccion = this.url;
    return this.http.post<any>(direccion,form)
  }
}
