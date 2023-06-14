import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TorneoEdicionRamaCategoriaService {
  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }
  constructor(private http: HttpClient) { }
  
  ObtenerTorneoEdicionRamaCategoria():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerTorneoEdicionRamaCategoria",{headers});
  }
  RegistrarTorneoEdicionRamaCategoria(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarTorneoEdicionRamaCategoria",form,{headers})
  }

  ModificarTorneoEdicionRamaCategoria(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"ModificarTorneoEdicionRamaCategoria",form,{headers})
  }

  obtenerTorneos():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerTorneos", {headers})
  }
  ObtenerTodasLasEdiciones():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerEdicionesTorneo",{headers});
  }

  ObtenerRamas():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerRamas",{headers});
  }

  ObtenerTodasLasCategorias():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerCategorias",{headers})
  }

  ObtenerLocalidades():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerLocalidades",{headers});
  }

}
