import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  constructor(private router:Router, private authService:AuthService){}

  collapsed = true;

  cerrarSesion(){
    const log = this.authService.logout().subscribe(x=>{console.log(x.data)})    
    localStorage.removeItem("Token");
    this.router.navigate(['home'])
  }
}
