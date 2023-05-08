import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposTorneoService {

  private _refresh$ = new Subject<void>();

  get refresh() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }
}
