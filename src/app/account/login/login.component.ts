import { Component, Inject, Injectable, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable ()
export class LoginComponent {
  
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  constructor( private api:AuthService, private router:Router,private _snackBar: MatSnackBar) { }

  async onLogin(form){
    if (form.valid){
      this.api.loginByEmail(form.value).subscribe(data => {
        let dataResponse = data;
        if(dataResponse.Token){
          localStorage.setItem("Token",dataResponse.Token)
          this.api.loggedIn = true;
          this.router.navigate(['home'])
        }
      },error=>this._snackBar.open((error.error.data?.tostring() || ''),"X",{duration:2000}))
    }
  }

  showModal(error){
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: error,
      background: "#f2eee3",
    })
  }
}
