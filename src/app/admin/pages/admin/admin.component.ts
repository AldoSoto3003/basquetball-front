import { Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit  {
  
  collapsed = true;
  datosUsuario:Usuario;

  admonGeneral: boolean = false;
  admonTorneo: boolean = false;
  Jugador: boolean = false;
  entrenador: boolean = false;
  arbitro: boolean = false;

  constructor(private router:Router, private authService:AuthService){
    // this.ObtenerDatos(); 
  }

  ngAfterViewInit(): void {
      this.ObtenerDatos(); 

  }


  ObtenerDatos() {
    this.authService.authme().subscribe(x => {
      localStorage.setItem("informacion_usuario", JSON.stringify(x.data));
      console.log(x.data.Id_Rol)
      switch(x.data.Id_Rol){
        case 1:
          this.admonGeneral = true;
          break;
        case 2:
          this.admonTorneo = true;
          break;
        case 3:
          this.Jugador = true;
          break;
        case 4:
          this.entrenador = true;
          break;
        case 5:
          this.arbitro = true;
          break;
        default:
          break;
      } 
    },)
    this.datosUsuario = JSON.parse(localStorage.getItem("informacion_usuario")!);
  }

  cerrarSesion(){
    const log = this.authService.logout().subscribe(x=>{console.log(x.data)})    
    localStorage.removeItem("Token");
    localStorage.removeItem("informacion_usuario");
    this.router.navigate(['home'])
  }

}
