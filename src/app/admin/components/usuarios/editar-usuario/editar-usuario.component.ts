import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosUsuario, Usuario } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { Generos } from 'src/app/models/Generos.interface';
import { Roles } from 'src/app/models/roles.interface';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  
  constructor( private userService: UserService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService){}

  get nombreNoValido(){ return this.editarForm.get('Nombres')?.invalid && this.editarForm.get('Nombres').touched }
  get ApellidoPaternoNoValido(){ return this.editarForm.get('ApellidoPaterno')?.invalid && this.editarForm.get('ApellidoPaterno').touched }
  get ApellidoMaternoNoValido(){ return this.editarForm.get('ApellidoMaterno')?.invalid && this.editarForm.get('ApellidoMaterno').touched }
  get emailNoValido(){ return this.editarForm.get('email')?.invalid && this.editarForm.get('email').touched }
  get passwordNoValido(){ return this.editarForm.get('password')?.invalid && this.editarForm.get('password').touched }
  get DomicilioNoValido(){ return this.editarForm.get('Domicilio')?.invalid && this.editarForm.get('Domicilio').touched }
  get fechaNoValido(){ return this.editarForm.get('Fecha_Nacimiento')?.invalid && this.editarForm.get('Fecha_Nacimiento').touched }
  get numSSNoValido(){ return this.editarForm.get('numSS')?.invalid && this.editarForm.get('numSS').touched }
  get cpNoValido(){ return this.editarForm.get('cp')?.invalid && this.editarForm.get('cp').touched }
  get curpNoValido(){ return this.editarForm.get('curp')?.invalid && this.editarForm.get('curp').touched }
  get telefonoNoValido(){ return this.editarForm.get('telefono')?.invalid && this.editarForm.get('telefono').touched }
  get referenciaNoValido(){ return this.editarForm.get('referencia')?.invalid && this.editarForm.get('referencia').touched }



  id = this.activerouter.snapshot.paramMap.get('id');
  imageURL = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"

  usuarios !: ListaUsuariosI[];
  roles !: Roles[];
  generos !: Generos[];
  codigo_postal !: CodigoPostal[];
  codigo_postal_para_obtener_asentamientos = ''
  curp_regex:string = ''
  base64:string;

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
      console.log(this.usuarios)
      
      this.editarForm.patchValue({
        'id': this.id,
        'Nombres': data.data.datos_usuario.Nombres,
        'ApellidoPaterno': data.data.datos_usuario.ApellidoPaterno,
        'ApellidoMaterno': data.data.datos_usuario.ApellidoMaterno,
        'email': data.data.email,
        'password': '',
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
      form.value.Fecha_Nacimiento = '2000/03/30'
      console.log('Este es el form',form.value)
      this.alertService.showSuccess('Formulario valido','Exito')
      this.userService.EditarUnUsuario(form.value).subscribe( data => {
        console.log(data)
      })

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
        this.base64 = reader.result as string;
        this.editarForm.patchValue({
          'image':this.base64
        })
      }
    }
  }

  obtenerAsentamientos(){
    if (this.codigo_postal_para_obtener_asentamientos.length == 5){
      const codigo_postal = {'CP':this.codigo_postal_para_obtener_asentamientos}
      this.userService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
        this.codigo_postal = data.data
      })
    }
  }


  onSalir(){
    this.router.navigate(['admin/usuarios'])
  }
}
