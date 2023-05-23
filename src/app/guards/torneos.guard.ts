import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TorneosGuard implements CanActivate {

  rol_usuario:string = localStorage.getItem("rol")
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 // ID_rol = 1 // Administrador general
    // ID_rol = 2 // Administrador de torneo
    // ID_rol = 3 // Jugador
    // ID_rol = 4 // Entrenador
    // ID_rol = 5 // Arbitro
    const activar = (this.rol_usuario == '1' ||this.rol_usuario == '2' || this.rol_usuario == '3'|| this.rol_usuario == '4'|| this.rol_usuario == '5')? true : false;
    
    return activar
    
  }
  
}
