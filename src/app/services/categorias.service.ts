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
}