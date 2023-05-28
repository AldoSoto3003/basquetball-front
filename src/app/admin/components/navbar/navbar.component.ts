import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router, private authService:AuthService){}

  nombre = localStorage.getItem('nombre');
  apellido = localStorage.getItem('apellido')
  
  
  cerrarSesion(){
    const log = this.authService.logout().subscribe(x=>{console.log(x.data)})    
    localStorage.removeItem("Token");
    localStorage.removeItem("informacion_usuario");
    localStorage.removeItem("rol");
    localStorage.removeItem("email");
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    this.router.navigate(['home'])
  }

}
