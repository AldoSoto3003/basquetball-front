import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Petition } from '../models/Petition.model';
import { LocalidadesI } from '../models/localidades.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {
  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  ObtenerLocalidades():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerLocalidades",{headers});
  }

  ModificarLocalidad(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ModificarLocalidad",form,{headers})
  }

  ObtenerCodigoPostal(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ObtenerCPEspecifico",id,{headers})
  }

  ModificarEstatus(data: any): Observable<Petition<LocalidadesI>> {
    return this.http.post<Petition<LocalidadesI>>(
      environment.urlApi + 'ModificarEstatusLocalidad',
      JSON.stringify(data),
      {
        headers: {
          authorization: "bearer " + localStorage.getItem("data")!,
          'Content-Type': 'application/json'
        }
      }
    );
  }


  RegistrarLocalidad(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarLocalidad",form,{headers})
  }
}
