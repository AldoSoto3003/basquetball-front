import { Component,Inject  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { edicionesI } from 'src/app/models/ediciones.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EdicionesService } from 'src/app/services/ediciones.service';

@Component({
  selector: 'app-editar-ediciones',
  templateUrl: './editar-ediciones.component.html',
  styleUrls: ['./editar-ediciones.component.css']
})
export class EditarEdicionesComponent {


  constructor( private Edicionesserver:EdicionesService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditarEdicionesComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: edicionesI){}

    categorias !: edicionesI[];


    editarForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
   
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
