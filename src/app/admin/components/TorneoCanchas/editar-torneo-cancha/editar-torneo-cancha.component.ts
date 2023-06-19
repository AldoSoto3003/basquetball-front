import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoCanchaI } from 'src/app/models/TorneoCancha.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoCanchaService } from '../../../../services/torneo-cancha.service';
@Component({
  selector: 'app-editar-torneo-cancha',
  templateUrl: './editar-torneo-cancha.component.html',
  styleUrls: ['./editar-torneo-cancha.component.css']
})
export class EditarTorneoCanchaComponent {

  constructor( private Torneocancha:TorneoCanchaService,private router:Router, private alertService:AlertasService
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

        console.log('Valido', form.value)
        this.Torneocancha.ModificarTorneoCanchas(form.value).subscribe(data => {
          if (data.status == 200) {
            this.dialogRef.close(true)
            this.alertService.showSuccess(data.message, 'Correcto')
          } else {
            this.dialogRef.close(false)
            this.alertService.showError(data.message, 'Error')
          }
        }), error => { this.alertService.showError('Ocurrio un error', error.error.data) }
  
        console.log(form.value)
      }else{
        console.log('No valido', form.value)
      this.dialogRef.close(false)
      this.alertService.showError('Formulario no valido', 'Fallo')
      }
    }
    setValues(){

      // this.editarForm.controls["id_torneo"].setValue(this.categoriaActual.id_torneo)
      // this.editarForm.controls["id_cancha"].setValue(this.categoriaActual.id_cancha)

    }
  
    onSalir(){}

}
