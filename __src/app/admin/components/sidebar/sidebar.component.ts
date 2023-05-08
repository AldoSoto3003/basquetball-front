import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router, private authService:AuthService){}

  collapsed = true;
  navData = navbarData

  cerrarSesion(){
    const log = this.authService.logout().subscribe(x=>{console.log(x.data)})    
    localStorage.removeItem("Token");
    this.router.navigate(['home'])
  }

}
