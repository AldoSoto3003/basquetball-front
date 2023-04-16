import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedIn:boolean = false;
  token: any;
  constructor(private authService:AuthService){
    this.loggedIn = localStorage.getItem("Token")?true:false; 
  }

  ngAfterInit(){
    this.loggedIn = localStorage.getItem("Token")?true:false; 
  }
  
  VerificarToken(){ 
    return this.loggedIn = localStorage.getItem("Token")?true:false; 
  }

  cerrarSesion(){
    const log = this.authService.logout().subscribe(x=>{console.log(x.data)})
    
    localStorage.removeItem("Token");
    localStorage.removeItem("informacion_usuario");
    

    this.loggedIn = false
  }
}
