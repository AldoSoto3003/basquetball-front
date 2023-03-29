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
    this.loggedIn = this.authService.loggedIn
  }
  
  VerificarToken(){ 
    this.loggedIn = this.authService.loggedIn
  }

  cerrarSesion(){
    localStorage.removeItem("Token")
    this.loggedIn = false
  }
}
