import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosUsuario, Usuario } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { Generos } from 'src/app/models/Generos.interface';
import { Roles } from 'src/app/models/roles.interface';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  
  constructor( private userService: UserService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService){}

  id = this.activerouter.snapshot.paramMap.get('id');
  usuarios !: ListaUsuariosI[];
  roles !: Roles[];
  generos !: Generos[];
  imageURL = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"

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
    numSS : new FormControl('',Validators.required),
    telefono : new FormControl('',Validators.required),
    curp : new FormControl('',),
    referencia : new FormControl('',Validators.required),
    Estatus : new FormControl('',Validators.required),
    image : new FormControl('',Validators.required),
  })

  ngAfterViewInit(){
    
  }

  ngOnInit():void{
        //Obtener los roles de la BDD
    this.userService.ObtenerLosRoles().subscribe( data => {
      this.roles = data.data
    })

    this.userService.ObtenerLosGeneros().subscribe(data=>{
      this.generos = data.data
    })
    this.userService.obtenerUnUsuario(this.id).subscribe( data => {
      this.usuarios = data.data
      this.editarForm.patchValue({
        'id': this.id,
        'Nombres': data.data.datos_usuario.Nombres,
        'ApellidoPaterno': data.data.datos_usuario.ApellidoPaterno,
        'ApellidoMaterno': data.data.datos_usuario.ApellidoMaterno,
        'email': data.data.email,
        'password': 'aldo',
        'Domicilio': data.data.datos_usuario.Domicilio,
        'Fecha_Nacimiento': String(data.data.datos_usuario.Fecha_Nacimiento),
        'Id_Rol': String(data.data.Id_Rol),
        'Id_Genero': String(data.data.ID_Genero),
        'id_asenta': String(data.data.datos_usuario.id_asenta_cpcons),
        'CP': String(data.data.datos_usuario.cp),
        'numSS': data.data.datos_usuario.numSS,
        'curp': data.data.datos_usuario.curp,
        'telefono': data.data.datos_usuario.telefono,
        'referencia': data.data.datos_usuario.referencia,
        'Estatus': data.data.Estatus,
      })     
    })
  
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
      this.editarForm.patchValue({
        'id': this.id,
        'Nombres': data.data.datos_usuario.Nombres,
        'ApellidoPaterno': data.data.datos_usuario.ApellidoPaterno,
        'ApellidoMaterno': data.data.datos_usuario.ApellidoMaterno,
        'email': data.data.email,
        'password': 'aldo',
        'Domicilio': data.data.datos_usuario.Domicilio,
        'Fecha_Nacimiento': String(data.data.datos_usuario.Fecha_Nacimiento),
        'Id_Rol': String(data.data.Id_Rol),
        'Id_Genero': String(data.data.ID_Genero),
        'id_asenta': String(data.data.datos_usuario.id_asenta_cpcons),
        'CP': String(data.data.datos_usuario.cp),
        'numSS': data.data.datos_usuario.numSS,
        'curp': data.data.datos_usuario.curp,
        'telefono': data.data.datos_usuario.telefono,
        'referencia': data.data.datos_usuario.referencia,
        'Estatus': data.data.Estatus,
      })     
    })
    console.log(this.editarForm)
    this.ngOnInit()
  }

  onFileChanged(event){
    if (event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) => {
        this.imageURL = event.target.result
      }
    }
  }

  onSalir(){
    this.router.navigate(['admin/usuarios'])
  }
}
