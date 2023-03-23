import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { ResponseI } from 'src/app/interfaces/response.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login-pruebas.component.html',
  styleUrls: ['./login-pruebas.component.css']
})
export class LoginPruebasComponent {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  constructor( private api:AuthService, private router:Router) { }

  
  async onLogin(form){
    if (form.valid){
      this.api.loginByEmail(form.value).subscribe(data => {
        let dataResponse = data;
        if(dataResponse.Token){
          localStorage.setItem("Token",dataResponse.Token)
          this.router.navigate(['home'])
        }else{
          console.log(dataResponse.error.data)
        }
      })
    }else{
      this.showModal()
    }
  }

  showModal(){
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'Verifica tus credenciales!',
      background: "#f2eee3",
    })
  }
}
