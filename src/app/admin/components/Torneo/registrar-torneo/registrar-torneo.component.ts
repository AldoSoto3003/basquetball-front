import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoI } from 'src/app/models/torneo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoService } from 'src/app/services/torneo.service';

@Component({
  selector: 'app-registrar-torneo',
  templateUrl: './registrar-torneo.component.html',
  styleUrls: ['./registrar-torneo.component.css']
})
export class RegistrarTorneoComponent {


  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }


  constructor( private TorneoService:TorneoService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrarTorneoComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: TorneoI){}

    categorias !: TorneoI[];

    nuevoForm = new FormGroup({
      NombreTorneo: new FormControl('',Validators.required),
    })

    ngOnInit(){

    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.TorneoService.RegistrarTorneo(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')
          this.dialogRef.close();
        }

        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }
  onSalir(){}
}
