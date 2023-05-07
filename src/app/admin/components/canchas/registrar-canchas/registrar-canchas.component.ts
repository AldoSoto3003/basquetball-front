import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanchasService } from 'src/app/services/canchas.service';

import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrar-canchas',
  templateUrl: './registrar-canchas.component.html',
  styleUrls: ['./registrar-canchas.component.css']
})
export class RegistrarCanchasComponent {
  constructor( private CanchasService: CanchasService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService){ }

  get NombreCanchaNoValido(){ return this.nuevoForm.get('NombreCancha')?.invalid && this.nuevoForm.get('NombreCancha').touched }
  get DomicilioNoValido(){ return this.nuevoForm.get('Domicilio')?.invalid && this.nuevoForm.get('Domicilio').touched }
  get DescripcionNoValido(){ return this.nuevoForm.get('Descripcion')?.invalid && this.nuevoForm.get('Descripcion').touched }
  get cpNoValido(){ return this.nuevoForm.get('cp')?.invalid && this.nuevoForm.get('cp').touched }
  get id_asentamientoNoValido(){ return this.nuevoForm.get('id_asentamiento')?.invalid && this.nuevoForm.get('id_asentamiento').touched }
  
  model: NgbDateStruct;
  usuarios !: ListaUsuariosI[];
  codigo_postal !: CodigoPostal[];
  codigo_postal_para_obtener_asentamientos = ''
  reader = new FileReader();
  public imagePath:any;
  base64:string;
  imagen:any = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"



  nuevoForm = new FormGroup({
    NombreCancha : new FormControl('',Validators.required),
    Domicilio : new FormControl('',Validators.required),
    Descripcion: new FormControl('',Validators.required),
    Latitud : new FormControl('',Validators.required),
    Longitud: new FormControl('',Validators.required),
    Altitud: new FormControl('',Validators.required),
    id_asentamiento : new FormControl('',Validators.required),
    cp : new FormControl('',[Validators.required,Validators.pattern(/^\d{5}$/)]),
    imagen : new FormControl('',Validators.required),    
  })

  ngOnInit():void{
    let token = localStorage.getItem('Token')

  } 

  postForm(form:any){
    if (form.valid){
      console.log('Este es el form',form)
      this.alertService.showSuccess('Formulario valido','Exito')
      this.CanchasService.RegistrarCancha(form.value).subscribe( data => {
        console.log(data)
      })

    }else{
      console.log('Este es el form',form)
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }

  

  onFileChanged(event){
    if (event.target.files){
      this.reader.readAsDataURL(event.target.files[0]);
      this.reader.onload = (event:any) => {
        this.imagen = event.target.result
        this.base64 = this.reader.result as string;
        this.nuevoForm.controls["imagen"].setValue(this.base64)
      }
    }
  }
  obtenerAsentamientos(){
    this.codigo_postal_para_obtener_asentamientos = this.nuevoForm.controls["cp"].value
    if (this.codigo_postal_para_obtener_asentamientos.length == 5){
      const codigo_postal = {'CP':this.codigo_postal_para_obtener_asentamientos}
      console.log(codigo_postal)
      this.CanchasService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
        this.codigo_postal = data.data
      })
    }
  }

  onSalir(){}

}
