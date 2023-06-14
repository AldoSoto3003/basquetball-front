import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ListaUsuariosI, Usuario } from '../models/Usuario.model';
import { Petition } from '../models/Petition.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor( private http:HttpClient){}

  private _refresh$ = new Subject<void>;

  get refresh(){
    return this._refresh$;
  }

  obtenerUnUsuario(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"ObtenerUsuario?id="+id,{headers})
  }

  obtenerUsuarios():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerUsuarios", {headers})
  }

  registrarUnUsuario(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarUsuario",form,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }

  EliminarUnUsuario(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"EliminarUsuario?id="+id,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }

  EditarUnUsuario(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ModificarUsuario",form,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }

  ObtenerLosRoles():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"ObtenerRoles",{headers})
  }

  ObtenerLosGeneros():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"ObtenerGeneros",{headers})
  }

  ObtenerCodigoPostal(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ObtenerCPEspecifico",id,{headers})
  }


}
