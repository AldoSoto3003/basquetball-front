import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoCanchaI } from 'src/app/models/TorneoCancha.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoEdicionRamaCategoriaService } from 'src/app/services/torneo-edicion-rama-categoria.service';

@Component({
  selector: 'app-editar-torneo-cancha',
  templateUrl: './editar-torneo-cancha.component.html',
  styleUrls: ['./editar-torneo-cancha.component.css']
})
export class EditarTorneoCanchaComponent {

  constructor( private TorneoEdicionRamaCategoriaService:TorneoEdicionRamaCategoriaService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditarTorneoCanchaComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: TorneoCanchaI){}

    categorias !: TorneoCanchaI[];


    editarForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      id_cancha: new FormControl('',Validators.required),
   
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
