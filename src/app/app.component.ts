import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basquetball-front';

  constructor(private jwtHelper: JwtHelperService){
    //Si el token 
    setTimeout(() => {
    
      if (localStorage.getItem("Token") && this.jwtHelper.isTokenExpired(localStorage.getItem("Token"))) {
        localStorage.removeItem("Token");
        Swal.fire("¡Atencion!","Su Sesión Expiro, vuelva iniciar sesion para continuar navegando!!","info").then(function(){
          window.location.reload();   
        })
    
    }
    }, 1000);
}
}


