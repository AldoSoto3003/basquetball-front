import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Jugadore } from '../models/equipos- jugadores.interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposJugadoresService  {

  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }


  ObtenerEquiposActivos():Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(environment.urlApi+"ObtenerEquiposActivos",{headers});
  }

  ObtenerJugadoresActivos(ID_Equipo: number): Observable<any> {
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<any>(`${environment.urlApi}ObtenerJugadoresActivos?ID_Equipo=${ID_Equipo}`, { headers });
  }
  
  

  
  
  obtenerUnJugador(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.get<any>(environment.urlApi+"getedicionidtorneo="+id,{headers})
  }

  ObtenerJugadoresEquipo(id:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token,'Content-Type': 'application/json'}
    return this.http.get<Jugadore[]>(environment.urlApi+"ObtenerJugadoresEquipo?id="+id,{headers});

  }


  RegistrarJugadorEquipo(form:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.post<any>(environment.urlApi+"RegistrarJugadorEquipo",form,{headers})
  }

  EliminarJugadorEquipo(id_equipo:any, id_usuario:any):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token }
    return this.http.post<any>(environment.urlApi+"EliminarJugadorEquipo?id_equipo="+id_equipo+"&id_jugador="+id_usuario,null,{headers})
  }
 

}
