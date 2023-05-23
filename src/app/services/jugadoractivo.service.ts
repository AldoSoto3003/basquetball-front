import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JugadoractivoService {

  get refresh() {
    return this.refresh;
  }
  constructor(private http: HttpClient) { }

  ObtenerJugadoresActivos(id:string):Observable<any>{
    const token = localStorage.getItem("Token")
    const headers = { Authorization: "bearer "+ token, 'Content-Type': 'application/json' }
    return this.http.get<any>(environment.urlApi+"ObtenerJugadoresActivos?ID_Equipo="+id, {headers})
  }
  
}
