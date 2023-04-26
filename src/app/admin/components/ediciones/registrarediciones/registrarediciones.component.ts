import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { edicionesI } from 'src/app/models/ediciones.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EdicionesService } from 'src/app/services/ediciones.service';

@Component({
  selector: 'app-registrarediciones',
  templateUrl: './registrarediciones.component.html',
  styleUrls: ['./registrarediciones.component.css']
})
export class RegistraredicionesComponent {

  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }


  constructor( private editarserver:EdicionesService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistraredicionesComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: edicionesI){}

    categorias !: edicionesI[];

    nuevoForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      num_edicion: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
    })

    ngOnInit(){

    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.editarserver.RegistrarEdicion(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }
  onSalir(){}

}


