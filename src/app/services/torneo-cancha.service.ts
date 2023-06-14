import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TorneoCanchaService {
  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

 
  ObtenerTorneoCanchas(id:string):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerTorneoCanchas?id_torneo="+id, {headers})
  }


  RegistrarTorneoCanchas(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarTorneoCanchas",form,{headers}).pipe(
      tap(() => {
        this.refresh.next();
      })
      )
  }


  ModificarTorneoCanchas(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ModificarTorneoCanchas",form,{headers})
  }

  obtenerTorneos():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerTorneos", {headers})
  }

  ObtenerTodasLasCanchas():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerTodasLasCanchas",{headers});
  }

}
