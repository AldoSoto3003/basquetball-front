import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosUsuario, Usuario } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {

  constructor( private userService: UserService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService){}

  usuarios !: ListaUsuariosI[];

  nuevoForm = new FormGroup({
    Nombres : new FormControl('',Validators.required),
    ApellidoPaterno : new FormControl('',Validators.required),
    ApellidoMaterno : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    Domicilio : new FormControl('',Validators.required),
    Fecha_Nacimiento : new FormControl('',Validators.required),
    Id_Rol : new FormControl('',Validators.required),
    Id_Genero : new FormControl('',Validators.required),
    id_asenta : new FormControl('',Validators.required),
    CP : new FormControl('',Validators.required),
    referencia : new FormControl('',Validators.required),
    numSS : new FormControl('',Validators.required),
    telefono : new FormControl('',Validators.required),
    curp : new FormControl('',),
    Estatus : new FormControl('',Validators.required),
    image : new FormControl('',Validators.required),
  })

  ngOnInit():void{
    let token = localStorage.getItem('Token')

    this.nuevoForm.patchValue({
      'Estatus':'ACTIVO',
      'image':'data:image/png;base64,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'
    })
  } 

  postForm(form:any){
    if (form.valid){
      console.log('Este es el form',form.value)
      this.alertService.showSuccess('Formulario valido','Exito')
      this.userService.registrarUnUsuario(form.value).subscribe( data => {
        console.log(data)
      })

    }else{
      console.log('Este es el form',form.value)
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }

  onSalir(){}
}
