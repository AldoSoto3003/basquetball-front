import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosUsuario, Usuario } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { Roles } from 'src/app/models/roles.interface';
import { Generos } from 'src/app/models/Generos.interface';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {

  constructor( private userService: UserService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService){ }

  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }
  get ApellidoPaternoNoValido(){ return this.nuevoForm.get('ApellidoPaterno')?.invalid && this.nuevoForm.get('ApellidoPaterno').touched }
  get ApellidoMaternoNoValido(){ return this.nuevoForm.get('ApellidoMaterno')?.invalid && this.nuevoForm.get('ApellidoMaterno').touched }
  get emailNoValido(){ return this.nuevoForm.get('email')?.invalid && this.nuevoForm.get('email').touched }
  get passwordNoValido(){ return this.nuevoForm.get('password')?.invalid && this.nuevoForm.get('password').touched }
  get DomicilioNoValido(){ return this.nuevoForm.get('Domicilio')?.invalid && this.nuevoForm.get('Domicilio').touched }
  get fechaNoValido(){ return this.nuevoForm.get('Fecha_Nacimiento')?.invalid && this.nuevoForm.get('Fecha_Nacimiento').touched }
  get numSSNoValido(){ return this.nuevoForm.get('numSS')?.invalid && this.nuevoForm.get('numSS').touched }
  get cpNoValido(){ return this.nuevoForm.get('cp')?.invalid && this.nuevoForm.get('cp').touched }
  get curpNoValido(){ return this.nuevoForm.get('curp')?.invalid && this.nuevoForm.get('curp').touched }
  get telefonoNoValido(){ return this.nuevoForm.get('telefono')?.invalid && this.nuevoForm.get('telefono').touched }
  get referenciaNoValido(){ return this.nuevoForm.get('referencia')?.invalid && this.nuevoForm.get('referencia').touched }

  imageURL = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"

  usuarios !: ListaUsuariosI[];
  roles !: Roles[];
  generos !: Generos[];
  codigo_postal !: CodigoPostal[];
  codigo_postal_para_obtener_asentamientos = ''
  curp_regex:string = ''
  base64:string;



  nuevoForm = new FormGroup({
    Nombres : new FormControl('',Validators.required),
    ApellidoPaterno : new FormControl('',Validators.required),
    ApellidoMaterno : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)]),
    Domicilio : new FormControl('',Validators.required),
    Fecha_Nacimiento : new FormControl('2000/03/30',Validators.required),
    Id_Rol : new FormControl('',Validators.required),
    Id_Genero : new FormControl('',Validators.required),
    id_asenta : new FormControl('',Validators.required),
    CP : new FormControl('',[Validators.required,Validators.pattern(/^\d{5}$/)]),
    referencia : new FormControl('',[Validators.required,]),
    numSS : new FormControl('',[Validators.required,Validators.pattern(/^\d{11}$/)]),
    telefono : new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)]),
    curp : new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/)]),
    Estatus : new FormControl('',Validators.required),
    image : new FormControl('',Validators.required),
  })

  ngOnInit():void{
    let token = localStorage.getItem('Token')

    //Obtener los roles de la BDD
    this.userService.ObtenerLosRoles().subscribe( data => {
      this.roles = data.data
    })

    this.userService.ObtenerLosGeneros().subscribe(data=>{
      this.generos = data.data
    })

    this.nuevoForm.patchValue({
      'Estatus':'ACTIVO',
    })

  } 

  postForm(form:any){
    if (form.valid){
      
      console.log('Este es el form',form)
      this.userService.registrarUnUsuario(form.value).subscribe( data => {
        console.log(data)
      }), error => this.alertService.showError('Error',error)

    }else{
      console.log('Este es el form',form)
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }

  onFileChanged(event){
    if (event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) => {
        this.imageURL = event.target.result
        this.base64 = reader.result as string;
        this.nuevoForm.patchValue({
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

  onSalir(){}
}
