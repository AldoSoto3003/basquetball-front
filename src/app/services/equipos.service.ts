import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {


  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }
  constructor(private http: HttpClient) { }
  
  ObtenerEquipos():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerEquipos",{headers});
  }

  RegistrarEquipo(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarEquipo",form,{headers}).pipe(
      tap(() => {
        this.refresh.next();
      })
      )
  }

  
  EliminarEquipo(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"EliminarEquipo?id="+id,{headers})
  }

  ModificarEquipo(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ModificarEquipo",form,{headers})
  }

  ObtenerCodigoPostal(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ObtenerCPEspecifico",id,{headers})
  }

  ObtenerJugadoresActivos(id:string):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerJugadoresActivos?ID_Equipo="+id, {headers})
  }

 
}
