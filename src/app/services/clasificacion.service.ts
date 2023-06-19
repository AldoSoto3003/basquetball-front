import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {


  constructor(private http: HttpClient) { }

  private _refresh$ = new Subject<void>;

  get refresh() {
    return this._refresh$;
  }

  obtenerclasificacion(id: any): Observable<any> {
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer " + token }
    return this.http.get<any>(environment.urlApi + "ObtenerClasificacionporTERCEByid?id=" + id, { headers })
  }




}
