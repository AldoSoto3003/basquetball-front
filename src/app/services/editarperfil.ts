import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Petition } from '../models/Petition.model';

@Injectable({
    providedIn: 'root'
  })
  export class EditarPerfilService {
    
    constructor( private http:HttpClient){}
  
    private _refresh$ = new Subject<void>;
  
    get refresh(){
      return this._refresh$;
    }

    ObtenerPerfil(): Observable<any> {
        const token = localStorage.getItem("Token");
        const headers = { Authorization: "bearer " + token, 'Content-Type': 'application/json' };
        return this.http.post<any>(environment.urlApi + "ObtenerUsuario", {}, { headers }).pipe(
          tap(() => {
            this.refresh.next();
          })
        );
      }
      
      EditarPerfil(form: any): Observable<any> {
        const token = localStorage.getItem("Token");
        const headers = { Authorization: "bearer " + token, 'Content-Type': 'application/json' };
        return this.http.post<any>(environment.urlApi + "ModificarUsuario", form, { headers }).pipe(
          tap(() => {
            this.refresh.next();
          })
        );
      }
      

}

