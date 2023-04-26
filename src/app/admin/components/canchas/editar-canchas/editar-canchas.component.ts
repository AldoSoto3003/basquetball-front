import { Component, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/services/errorHandling.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CanchasI} from 'src/app/models/InformacionCanchas.model';
import { CanchasService } from 'src/app/services/canchas.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';


@Component({
  selector: 'app-editar-canchas',
  templateUrl: './editar-canchas.component.html',
  styleUrls: ['./editar-canchas.component.css']
})
export class EditarCanchasComponent {


  constructor( private CanchasService:CanchasService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditarCanchasComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: CanchasI){}


    get nombreCanchaNoValido(){ return this.editarForm.get('NombresCancha')?.invalid && this.editarForm.get('NombresCancha').touched }
    get DescripcionNoValido(){ return this.editarForm.get('Descripcion')?.invalid && this.editarForm.get('Descripcion').touched }
    get DomicilioNoValido(){ return this.editarForm.get('Domicilio')?.invalid && this.editarForm.get('Domicilio').touched }
    get cpNoValido(){ return this.editarForm.get('cp')?.invalid && this.editarForm.get('cp').touched }
    get EstatusNoValido(){ return this.editarForm.get('Estatus')?.invalid && this.editarForm.get('Estatus').touched }

   categorias !: CanchasI[];
   codigo_postal !: CodigoPostal[];
   codigo_postal_para_obtener_asentamientos = ''
   base64:string;


   urlImagen:any = "https://i.imgur.com/ev49fRz.png"
   reader = new FileReader();
   public imagePath:any;
   public message: string;


  editarForm = new FormGroup({
    id:new FormControl(''),
    NombreCancha: new FormControl('',Validators.required),
    Descripcion:  new FormControl('',Validators.required),     
    urlImagen:    new FormControl('',Validators.required),      
    Latitud:      new FormControl('',Validators.required),       
    Longitud:     new FormControl('',Validators.required),        
    Altitud:      new FormControl('',Validators.required),        
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
      
      this.CanchasService.EditarCanchas(form.value).subscribe( data => {
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
  this.editarForm.controls["NombreCancha"].setValue(this.categoriaActual.NombreCancha)
  this.editarForm.controls["Descripcion"].setValue(this.categoriaActual.Descripcion)
  this.editarForm.controls["Latitud"].setValue(String(this.categoriaActual.Latitud))
  this.editarForm.controls["Longitud"].setValue(String(this.categoriaActual.Latitud))
  this.editarForm.controls["Altitud"].setValue(String(this.categoriaActual.Altitud))
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
  this.codigo_postal_para_obtener_asentamientos = this.editarForm.controls["CP"].value
  if (this.codigo_postal_para_obtener_asentamientos.length == 5){
    const codigo_postal = {'CP':this.codigo_postal_para_obtener_asentamientos}
    this.CanchasService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
      this.codigo_postal = data.data
    })
  }
}
  
  onSalir(){
    this.router.navigate(['admin/canchas'])
  }

}
