import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
  })
  export class ActualizarUsuario {
    constructor(private http: HttpClient) {}
  
    private _refresh$ = new Subject<void>();
  
    get refresh() {
      return this._refresh$;
    }
  
    ObtenerUsuario(): Observable<any> {
      const token = localStorage.getItem('Token');
      const headers = { Authorization: 'bearer ' + token, 'Content-Type': 'application/json' };
      return this.http.get<any>(environment.urlApi + 'auth/me', { headers }).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
    }
    
      
    Actualizar(form: any): Observable<any> {
      console.log("datos que llegan",form);
      const token = localStorage.getItem('Token');
      const headers = { Authorization: 'bearer ' + token, 'Content-Type': 'application/json' };
      return this.http.post<any>(environment.urlApi + 'ModificarUsuario', form, { headers }).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
    }

    ObtenerCodigoPostal(id:any):Observable<any>{
      const token = localStorage.getItem("Token")
      const headers = { Authorization: "bearer "+ token }
      return this.http.post<any>(environment.urlApi+"ObtenerCPEspecifico",id,{headers})
    }
  }
  