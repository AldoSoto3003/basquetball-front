import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneoI } from 'src/app/models/torneo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoService } from 'src/app/services/torneo.service';

@Component({
  selector: 'app-editar-torneo',
  templateUrl: './editar-torneo.component.html',
  styleUrls: ['./editar-torneo.component.css']
})
export class EditarTorneoComponent {

  constructor( private TorneoService: TorneoService ,private activerouter:ActivatedRoute, private router:Router, private alertService:AlertasService,
    public dialogRef: MatDialogRef<EditarTorneoComponent>, @Inject(MAT_DIALOG_DATA) public usuarioActual: TorneoI){}

    get nombreNoValido(){ return this.editarForm.get('NombreTorneo')?.invalid && this.editarForm.get('NombreTorneo').touched }

  usuarios !: TorneoI[];
  reader = new FileReader();
  public message: string;

  editarForm = new FormGroup({
    id: new FormControl(''),
    NombreTorneo : new FormControl('',Validators.required),
    Estatus : new FormControl('',Validators.required),
  })

  ngOnInit():void{
    this.setDatos()
  } 

  postForm(form:any){
    if (form.valid){
      console.log('Valido',form.value)
      
      this.TorneoService.EditarTorneo(form.value).subscribe( data => {
        if (data.status == 200){
          this.dialogRef.close(true)
          this.alertService.showSuccess(data.message,'Correcto')
        }
        else{
          this.dialogRef.close(false)
          this.alertService.showError(data.message,'Error')
        }
      }), error =>{ this.alertService.showError('Ocurrio un error',error.error.data)}

    }else{
      console.log('No valido',form.value)
      this.dialogRef.close(false)
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }

  setDatos(){
   
    this.editarForm.controls["id"].setValue(String(this.usuarioActual.id))
    this.editarForm.controls["NombreTorneo"].setValue(this.usuarioActual.NombreTorneo)
    this.editarForm.controls["Estatus"].setValue("Activo")
  }

  onSalir(){}
}
