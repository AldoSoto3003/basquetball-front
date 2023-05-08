import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { LocalidadesI } from 'src/app/models/localidades.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { LocalidadesService } from 'src/app/services/localidades.service';

@Component({
  selector: 'app-registrar-localidades',
  templateUrl: './registrar-localidades.component.html',
  styleUrls: ['./registrar-localidades.component.css']
})
export class RegistrarLocalidadesComponent {

  constructor( private LocalidadesService: LocalidadesService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService){ }

  get NombrelocalidadNoValido(){ return this.nuevoForm.get('NombreLocalidad')?.invalid && this.nuevoForm.get('NombreLocalidad').touched }
  get DomicilioNoValido(){ return this.nuevoForm.get('Domicilio')?.invalid && this.nuevoForm.get('Domicilio').touched }
  get cpNoValido(){ return this.nuevoForm.get('cp')?.invalid && this.nuevoForm.get('cp').touched }
  get id_asentamientoNoValido(){ return this.nuevoForm.get('id_asentamiento')?.invalid && this.nuevoForm.get('id_asentamiento').touched }
  
  model: NgbDateStruct;
  Localidad !: LocalidadesI[];
  codigo_postal !: CodigoPostal[];
  codigo_postal_para_obtener_asentamientos = ''
  reader = new FileReader();
  public imagePath:any;
  base64:string;
  urlImagen:any = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"



  nuevoForm = new FormGroup({
    NombreCancha : new FormControl('',Validators.required),
    Domicilio : new FormControl('',Validators.required),
    id_asentamiento : new FormControl('',Validators.required),
    cp : new FormControl('',[Validators.required,Validators.pattern(/^\d{5}$/)]),
    urlImagen : new FormControl('',Validators.required),    
  })

  ngOnInit():void{
    let token = localStorage.getItem('Token')

  } 

  postForm(form:any){
    if (form.valid){
      console.log('Este es el form',form)
      this.alertService.showSuccess('Formulario valido','Exito')
      this.LocalidadesService.RegistrarLocalidad(form.value).subscribe( data => {
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
        this.urlImagen = event.target.result
        this.base64 = this.reader.result as string;
        this.nuevoForm.controls["urlImagen"].setValue(this.base64)
      }
    }
  }
  obtenerAsentamientos(){
    this.codigo_postal_para_obtener_asentamientos = this.nuevoForm.controls["cp"].value
    if (this.codigo_postal_para_obtener_asentamientos.length == 5){
      const codigo_postal = {'CP':this.codigo_postal_para_obtener_asentamientos}
      console.log(codigo_postal)
      this.LocalidadesService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
        this.codigo_postal = data.data
      })
    }
  }

  onSalir(){}


}
