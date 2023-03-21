import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { ResponseI } from 'src/app/interfaces/response.interface';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login-pruebas.component.html',
  styleUrls: ['./login-pruebas.component.css']
})
export class LoginPruebasComponent {

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor( private api:AuthService) { }


  async onLogin(form){
    
    await this.api.loginByEmail(form).subscribe(data => {
      let dataResponse:ResponseI = data;
      if(dataResponse.Token){
        localStorage.setItem("Token",dataResponse.Token)
        console.log(dataResponse.Token)
      }else{
        console.log("no ingreso")
      }
    })

  }

}
