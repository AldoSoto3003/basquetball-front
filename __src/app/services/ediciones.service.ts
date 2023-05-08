import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EdicionesService {

private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }



  constructor(private http: HttpClient) { }

     ObtenerTodasLasEdiciones():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"getediciones",{headers});
  }
  
 RegistrarEdicion(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"addEdicion",form,{headers})
  }
  
   obtenerUnaEdicion(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"getedicionidtorneo="+id,{headers})
  }
}