import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from 'src/app/validators/CustomValidator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  token: string;
  frmRecover:FormGroup;
  hide1 = true;
  hide2 = true;

  constructor(private router:Router, private route: ActivatedRoute, private jwtHelper: JwtHelperService, private userService:UserService, private fb:FormBuilder){
    this.setToken();
    this.VerifiedToken();
    this.createForm();
  }

  setToken() {
    this.route.paramMap.subscribe((param) => (this.token = param.get('token')!));
  }

  VerifiedToken(){
    this.userService.ValidarToken(this.token).subscribe(x=>{
      console.log(x);
      if(this.jwtHelper.isTokenExpired(this.token))
      this.router.navigate(["/"]);
    },error=>this.router.navigate(["/"]));
    
  }

  createForm(){
    this.frmRecover=this.fb.group({
      Password: ['', [Validators.minLength(8), Validators.required]],
      Password2: ['', [Validators.minLength(8), Validators.required]],
    }, {
      validators:ConfirmedValidator("Password","Password2")
    }
     
    )
  }

  submit(){
    if(this.frmRecover.valid)
    this.CambiarContraseña();
    console.log(this.frmRecover);
  }
  CambiarContraseña(){
    this.userService.ModificarPassword({
      PassNew:this.frmRecover.controls["Password"].value,
      PassAux:this.frmRecover.controls["Password2"].value
    },this.token).subscribe(x=>{
      this.userService.DarDeBajaToken(this.token);
      Swal.fire(x.message,x.data,"success").then(function(){
      
        window.location.href="/home/login";
      })
    },error=>Swal.fire(error.error.message,error.error.data,"error"))
  }
}




