import { Component,Inject  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { LocalidadesI } from 'src/app/models/localidades.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { LocalidadesService } from 'src/app/services/localidades.service';

@Component({
  selector: 'app-editar-localidades',
  templateUrl: './editar-localidades.component.html',
  styleUrls: ['./editar-localidades.component.css']
})
export class EditarLocalidadesComponent {

  constructor( private LocalidadesService:LocalidadesService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditarLocalidadesComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: LocalidadesI){}


    get nombreCanchaNoValido(){ return this.editarForm.get('NombresCancha')?.invalid && this.editarForm.get('NombresCancha').touched }
    get DescripcionNoValido(){ return this.editarForm.get('Descripcion')?.invalid && this.editarForm.get('Descripcion').touched }
    get DomicilioNoValido(){ return this.editarForm.get('Domicilio')?.invalid && this.editarForm.get('Domicilio').touched }
    get cpNoValido(){ return this.editarForm.get('cp')?.invalid && this.editarForm.get('cp').touched }
    get EstatusNoValido(){ return this.editarForm.get('Estatus')?.invalid && this.editarForm.get('Estatus').touched }

   categorias !: LocalidadesI[];
   codigo_postal !: CodigoPostal[];
   codigo_postal_para_obtener_asentamientos = ''
   base64:string;


   urlImagen:any = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
   reader = new FileReader();
   public imagePath:any;
   public message: string;


  editarForm = new FormGroup({
    id:new FormControl(''),
    NombreLocalidad: new FormControl('',Validators.required),     
    urlImagen:    new FormControl('',Validators.required),             
    Domicilio:    new FormControl('',Validators.required),        
    id_asenta_cpcons: new FormControl('',Validators.required),
    CP:           new FormControl('',Validators.required),              
    Estatus:      new FormControl('',Validators.required),       
  })


  ngOnInit(): void {
    this.setDatos()
  }

  onUpdate(form:any){
    if (form.valid){
      console.log('Valido',form.value)
      
      this.LocalidadesService.ModificarLocalidad(form.value).subscribe( data => {
        this.alertService.showSuccess('Formulario valido','Exito')
      }), error =>{ this.alertService.showError('Ocurrio un error',error.error.data)}

    }else{
      console.log('No valido',form.value)
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }

setDatos(){


  this.base64=this.categoriaActual.urlImagen
  this.editarForm.controls["id"].setValue(String(this.categoriaActual.id))
  this.editarForm.controls["Nombrelocalidad"].setValue(this.categoriaActual.NombreLocalidad)
  this.editarForm.controls["Domicilio"].setValue(this.categoriaActual.Domicilio)
  this.editarForm.controls["CP"].setValue(this.categoriaActual.cp)
  // this.editarForm.controls["id_asenta"].setValue(this.categoriaActual.id_asenta_cpcons)
  this.editarForm.controls["Estatus"].setValue("Activo")
  this.urlImagen = this.base64
}

onFileChanged(event){
  if (event.target.files){
    this.reader.readAsDataURL(event.target.files[0]);
    this.reader.onload = (event:any) => {
      this.urlImagen = event.target.result
      this.base64 = this.reader.result as string;
      this.editarForm.controls["imagen"].setValue(this.base64)
    }
  }
}




obtenerAsentamientos(){
  this.codigo_postal_para_obtener_asentamientos = this.editarForm.controls["cp"].value
  if (this.codigo_postal_para_obtener_asentamientos.length == 5){
    const codigo_postal = {'CP':this.codigo_postal_para_obtener_asentamientos}
    console.log(codigo_postal)
    this.LocalidadesService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
      this.codigo_postal = data.data
    })
  }
}
  
  onSalir(){
    this.router.navigate(['admin/localidades'])
  }

}
