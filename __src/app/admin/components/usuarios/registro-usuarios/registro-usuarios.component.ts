import { Component, Inject } from '@angular/core';
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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {

  constructor( private userService: UserService ,private activerouter:ActivatedRoute, private router:Router, 
    private alertService:AlertasService,private dialogRef: MatDialogRef<EditarUsuarioComponent>, @Inject(MAT_DIALOG_DATA) public usuarioActual: ListaUsuariosI){ }

  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }
  get ApellidoPaternoNoValido(){ return this.nuevoForm.get('ApellidoPaterno')?.invalid && this.nuevoForm.get('ApellidoPaterno').touched }
  get ApellidoMaternoNoValido(){ return this.nuevoForm.get('ApellidoMaterno')?.invalid && this.nuevoForm.get('ApellidoMaterno').touched }
  get emailNoValido(){ return this.nuevoForm.get('email')?.invalid && this.nuevoForm.get('email').touched }
  get passwordNoValido(){ return this.nuevoForm.get('password')?.invalid && this.nuevoForm.get('password').touched }
  get DomicilioNoValido(){ return this.nuevoForm.get('Domicilio')?.invalid && this.nuevoForm.get('Domicilio').touched }
  get fechaNoValido(){ return this.nuevoForm.get('Fecha_Nacimiento')?.invalid && this.nuevoForm.get('Fecha_Nacimiento').touched }
  get numSSNoValido(){ return this.nuevoForm.get('numSS')?.invalid && this.nuevoForm.get('numSS').touched }
  get cpNoValido(){ return this.nuevoForm.get('CP')?.invalid && this.nuevoForm.get('CP').touched }
  get curpNoValido(){ return this.nuevoForm.get('curp')?.invalid && this.nuevoForm.get('curp').touched }
  get telefonoNoValido(){ return this.nuevoForm.get('telefono')?.invalid && this.nuevoForm.get('telefono').touched }
  get referenciaNoValido(){ return this.nuevoForm.get('referencia')?.invalid && this.nuevoForm.get('referencia').touched }
  get rolNoValido(){ return this.nuevoForm.get('Id_Rol')?.invalid && this.nuevoForm.get('Id_Rol').touched }
  get asentaNoValido(){ return this.nuevoForm.get('id_asenta')?.invalid && this.nuevoForm.get('id_asenta').touched }

  usuarios !: ListaUsuariosI[];
  roles !: Roles[];
  generos !: Generos[];
  codigo_postal !: CodigoPostal[];
  codigo_postal_para_obtener_asentamientos = ''
  curp_regex:string = ''
  base64:string;

  imageURL:any = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
  reader = new FileReader();
  public imagePath:any;
  public message: string;



  nuevoForm = new FormGroup({
    Nombres : new FormControl('',Validators.required),
    ApellidoPaterno : new FormControl('',Validators.required),
    ApellidoMaterno : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/)]),
    Domicilio : new FormControl('',Validators.required),
    Fecha_Nacimiento : new FormControl('2000/03/30',[Validators.required]),
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
        if (data.status == 200){
          this.dialogRef.close(true)
          this.alertService.showSuccess(data.message,'Correcto')
        }else{
          this.alertService.showError(data.message,'Error')
        }
      }), error => this.alertService.showError('Error',error)

    }else{
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }


  onFileChanged(event){
    if (event.target.files){
      this.reader.readAsDataURL(event.target.files[0]);
      this.reader.onload = (event:any) => {
        this.imageURL = event.target.result
        this.base64 = this.reader.result as string;
        this.nuevoForm.controls["image"].setValue(this.base64)
      }
    }
  }

  obtenerAsentamientos(){

    if (this.codigo_postal_para_obtener_asentamientos.length == 5){
      const codigo_postal = {'CP':this.codigo_postal_para_obtener_asentamientos}
      console.log(codigo_postal)
      this.userService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
        this.codigo_postal = data.data
      })
    }else{
      console.log("No se cumple")
    }
  }

  onSalir(){}
}
