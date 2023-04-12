import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Petition } from '../models/Petition.model';
import { Subject, tap } from 'rxjs';
import { InformacionCanchas } from '../models/InformacionCanchas.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }
  constructor(private usuario: HttpClient) {

  }
  

  RegistrarCancha(data: any): Observable<Petition<InformacionCanchas>> {
    return this.usuario.post<Petition<InformacionCanchas>>(environment.urlApi + "RegistrarCancha", JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

  }

  ActualizarCancha(data:any):Observable<Petition<InformacionCanchas>>{
    return this.usuario.put<Petition<InformacionCanchas>>(environment.urlApi+"ActualizarCancha",JSON.stringify(data),{
      headers:{
          authorization: "bearer " + localStorage.getItem("data")!,
        'Content-Type': 'application/json'
      }
    });
  }


   //modificar estatus

   ModificarEstatus(data: any): Observable<Petition<InformacionCanchas>> {
    return this.usuario.put<Petition<InformacionCanchas>>(
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

  ObtenerTodasLasCanchas():Observable<Petition<InformacionCanchas>>{
    return this.usuario.get<Petition<InformacionCanchas>>(environment.urlApi+"ObtenerTodasLasCanchas", { headers: { 'Content-Type': 'application/json' } });
   }



}
