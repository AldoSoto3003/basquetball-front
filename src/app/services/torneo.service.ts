import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private http:HttpClient) { }

  private _refresh$ = new Subject<void>;

  get refresh(){
    return this._refresh$;
  }


  RegistrarTorneo(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarTorneo",form,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }


  EditarTorneo(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.put<any>(environment.urlApi+"ModificarTorneo",form,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }

  EliminarTorneo(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.delete<any>(environment.urlApi+"EliminarTorneo?id="+id,{headers}).pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }

  obtenerTorneos():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerTorneos", {headers})
  }
  obtenerUnTorneo(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"ObtenerTorneo?id="+id,{headers})
  }
}
