import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EquiposService } from 'src/app/services/equipos.service';
import { EditarequipoComponent } from '../editarequipo/editarequipo.component';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { equiposI } from 'src/app/models/equipos.interface';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { JugadorA } from 'src/app/models/jugadoractivo.interface';

@Component({
  selector: 'app-registrarequipos',
  templateUrl: './registrarequipos.component.html',
  styleUrls: ['./registrarequipos.component.css']
})
export class RegistrarequiposComponent {




  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }

  constructor( private EquiposService:EquiposService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrarequiposComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: equiposI){}

    categorias !: equiposI[];
    codigo_postal !: CodigoPostal[];
    base64:string;
    jugadorA!:JugadorA[];
    codigo_postal_para_obtener_asentamientos = ''
    imagen:any = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
    reader = new FileReader();
    public imagePath:any;
    
    nuevoForm = new FormGroup({
      Nombre: new FormControl('',Validators.required),
      Descripcion: new FormControl('',Validators.required),
      id_asentamiento: new FormControl('',Validators.required),
      cp: new FormControl('',Validators.required),
      id_persona: new FormControl('',Validators.required),
      imagen : new FormControl('',Validators.required), 
    })

    ngOnInit(){ 
      let token = localStorage.getItem('Token')
      this.EquiposService.ObtenerJugadoresActivos('1').subscribe( data => {
        this.jugadorA = data.data
      })


    }


    onRegister(form:any){
    if (form.valid){
      
      console.log('Este es el form',form.value)
      this.EquiposService.RegistrarEquipo(form.value).subscribe( data => {
        console.log(data)
        if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
      }), error => this.alertService.showError('Error',error)

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
      this.EquiposService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
        this.codigo_postal = data.data
      })
    }
  }
  onSalir(){}

}
