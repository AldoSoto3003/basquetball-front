import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  constructor( private http:HttpClient ){}

  private _refresh$ = new Subject<void>;

  get refresh(){
    return this._refresh$;
  }

  obtenerUnaCategoria(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"ObtenerCategoriaByid?id="+id,{headers})
  }

  ObtenerTodasLasCategorias():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerCategorias",{headers})
  }

  registrarUnaCategoria(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarCategoria",form,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }

  EditarUnaCategoria(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ModificarCategoria",form,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }


  EliminarUnaCategoria(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"EliminarCategoria?id="+id,null,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }



}