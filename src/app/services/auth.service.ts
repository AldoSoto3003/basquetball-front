import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../interfaces/login.interface';
import { environment } from 'src/environments/environment.prod';
import { Petition } from '../models/Petition.model';
import { Usuario } from '../models/Usuario.model';

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

  authme():Observable<Petition<Usuario>>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<Petition<Usuario>>(environment.urlApi+"auth/me", {headers})
  }

  logout():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"auth/logout",null, {headers})
  }

  // registerUser():Observable<any>{
  //   const a = "a"
  //   return a
  // }

  verificarToken(){
    return localStorage.getItem("Token")?true:false; 
  }
}
