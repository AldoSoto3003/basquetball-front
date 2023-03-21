import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../interfaces/login.interface';
import { ResponseI } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "127.0.0.1:90/api/auth/login";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url;
    return this.http.post<ResponseI>(direccion,form);
  }
}
