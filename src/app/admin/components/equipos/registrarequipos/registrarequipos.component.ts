import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EquiposService } from 'src/app/services/equipos.service';
import { EditarequipoComponent } from '../editarequipo/editarequipo.component';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { equiposI } from 'src/app/models/equipos.interface';

@Component({
  selector: 'app-registrarequipos',
  templateUrl: './registrarequipos.component.html',
  styleUrls: ['./registrarequipos.component.css']
})
export class RegistrarequiposComponent {

  constructor( private EquiposService:EquiposService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditarequipoComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: equiposI){}

    categorias !: equiposI[];


    editarForm = new FormGroup({
      id: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
      Nombre: new FormControl('',Validators.required),
      id_asenta_cpcons:new FormControl('',Validators.required),
      ID_Usuario:new FormControl('',Validators.required),
      cp:new FormControl('',Validators.required),
      Estatus: new FormControl('',Validators.required),
    })

    ngOnInit(){
      console.log(this.categoriaActual)
    }

    enEditar(form:any){
      if (form.valid){
        console.log(form.value)
      }else{
        console.log(form.value)
      }
    }
    setValues(){

    }
  
    onSalir(){}
  

}
