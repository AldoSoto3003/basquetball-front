import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../interfaces/login.interface';
import { environment } from 'src/environments/environment.prod';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean;

  constructor(private http:HttpClient) { 
    
  }

  loginByEmail(form:LoginI):Observable<any>{
    this.loggedIn = false;
    return this.http.post<any>(environment.urlApi+"auth/login",form)
  }

  authme():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"auth/me",null, {headers})
  }

  logout():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"auth/logout",null, {headers})
  }

  verificarToken(){
    return localStorage.getItem("Token")?true:false; 
  }
}
