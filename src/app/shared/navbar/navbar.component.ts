import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  inicioSesion:boolean = false;
  token: any;

  
  
  VerificarToken(){
    return localStorage.getItem("Token")?true:false; 
  }
}
