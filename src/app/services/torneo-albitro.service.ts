import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TorneoAlbitroService {

  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  RegistrarTorneoArbitro(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarTorneoArbitro",form,{headers})
  }
  ModificarTorneoArbitro(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.put<any>(environment.urlApi+"ModificarTorneoArbitro",form,{headers})
  }
  ObtenerTorneoArbitro():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerTorneoArbitro", {headers})
  }
  obtenerTorneos():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerTorneos", {headers})
  }

}
