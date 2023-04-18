import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosUsuario, Usuario } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  
  constructor( private userService: UserService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService){}

  @Input() id:number;

  usuarios !: ListaUsuariosI[];
  url = "../../../../src/assets/img/default.png"

  editarForm = new FormGroup({
    id: new FormControl(''),
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

  ngAfterViewInit(){
    
  }

  ngOnInit():void{
    
  } 

  postForm(form:any){
    if (form.valid){
      console.log('Este es el form',form.value)
      this.alertService.showSuccess('Formulario valido','Exito')

    }else{
      console.log('Este es el form',form.value)
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }

  onEdit(){
    this.userService.obtenerUnUsuario(this.id).subscribe( data => {
      this.usuarios = data.data
      this.editarForm.setValue({
        'id': String(data.data.urlImagen),
        'email': data.data.email,
        'password': 'aldo',
        'image': '',
        'Id_Genero': String(data.data.ID_Genero),
        'Id_Rol': String(data.data.Id_Rol),
        'Estatus': data.data.Estatus,
        'Nombres': data.data.datos_usuario.Nombres,
        'ApellidoPaterno': data.data.datos_usuario.ApellidoPaterno,
        'ApellidoMaterno': data.data.datos_usuario.ApellidoMaterno,
        'Domicilio': data.data.datos_usuario.Domicilio,
        'Fecha_Nacimiento': String(data.data.datos_usuario.Fecha_Nacimiento),
        'id_asenta': String(data.data.datos_usuario.id_asenta_cpcons),
        'CP': String(data.data.datos_usuario.cp),
        'referencia': data.data.datos_usuario.referencia,
        'numSS': data.data.datos_usuario.numSS,
        'telefono': data.data.datos_usuario.telefono,
        'curp': data.data.datos_usuario.curp,
      })     
    })
    console.log(this.editarForm)
  }
  onSalir(){}
}
