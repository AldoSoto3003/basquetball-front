import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Petition } from '../models/Petition.model';
import { Subject, tap } from 'rxjs';
import { CanchasI } from '../models/InformacionCanchas.model';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }
  constructor(private http: HttpClient) {

  }
  

  RegistrarCancha(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarCancha",form,{headers})
  }

  ActualizarCancha(data:any):Observable<Petition<CanchasI>>{
    return this.http.put<Petition<CanchasI>>(environment.urlApi+"ActualizarCancha",JSON.stringify(data),{
      headers:{
          authorization: "bearer " + localStorage.getItem("data")!,
        'Content-Type': 'application/json'
      }
    });
  }


   //modificar estatus

   ModificarEstatus(data: any): Observable<Petition<CanchasI>> {
    return this.http.put<Petition<CanchasI>>(
      environment.urlApi + 'ModificarEstatus',
      JSON.stringify(data),
      {
        headers: {
          authorization: "bearer " + localStorage.getItem("data")!,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  ObtenerTodasLasCanchas():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerTodasLasCanchas",{headers});
  }


  ObtenerCodigoPostal(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ObtenerCPEspecifico",id,{headers})
  }
  EditarCanchas(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.put<any>(environment.urlApi+"ModificarCancha",form,{headers})
  }

}
