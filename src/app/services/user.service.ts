import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { ListaUsuariosI, Usuario } from '../models/Usuario.model';
import { Petition } from '../models/Petition.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor( private http:HttpClient){}

  registrarUnUsuario(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarUsuario",form,{headers})
  }

  obtenerUsuarios():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerUsuarios", {headers})
  }

  obtenerUnUsuario(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"ObtenerUsuario?id="+id,{headers})
  }

  EliminarUnUsuario(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.delete<any>(environment.urlApi+"EliminarUsuario?id="+id,{headers})
  }

}
