import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoI } from 'src/app/models/torneo.interface';
import { TorneoAlbitroI } from 'src/app/models/torneoalbitro.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoAlbitroService } from 'src/app/services/torneo-albitro.service';

@Component({
  selector: 'app-editartorneoalbitro',
  templateUrl: './editartorneoalbitro.component.html',
  styleUrls: ['./editartorneoalbitro.component.css']
})
export class EditartorneoalbitroComponent {


  constructor( private TorneoAlbitroService:TorneoAlbitroService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditartorneoalbitroComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: TorneoAlbitroI){}

    categorias !: TorneoAlbitroI[];
    torneo !: TorneoI[];


    editarForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      id_arbitro: new FormControl('',Validators.required),
      Estatus: new FormControl('',Validators.required),
   
    })

    ngOnInit(){

      let token = localStorage.getItem('Token')
      this.TorneoAlbitroService.obtenerTorneos().subscribe( data => {
        this.torneo = data.data
      })
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
