import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  constructor( private http:HttpClient ){}

  ObtenerTodasLasCategorias():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerCategorias",{headers})
  }

  registrarUnaCategoria(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarCategoria",form,{headers})
  }

  EditarUnaCategoria(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.put<any>(environment.urlApi+"ModificarCategoria",form,{headers})
  }

  obtenerUnaCategoria(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"ObtenerCategoriaByid?id="+id,{headers})
  }

  EliminarUnaCategoria(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.delete<any>(environment.urlApi+"EliminarCategoria?id="+id,{headers})
  }



}