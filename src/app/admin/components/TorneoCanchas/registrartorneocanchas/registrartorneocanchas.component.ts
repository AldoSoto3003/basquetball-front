import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoCanchaI } from 'src/app/models/TorneoCancha.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoCanchaService } from 'src/app/services/torneo-cancha.service';

@Component({
  selector: 'app-registrartorneocanchas',
  templateUrl: './registrartorneocanchas.component.html',
  styleUrls: ['./registrartorneocanchas.component.css']
})
export class RegistrartorneocanchasComponent {
  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }


  constructor( private TorneoCanchaService:TorneoCanchaService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrartorneocanchasComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: TorneoCanchaI){}

    categorias !: TorneoCanchaI[];

    nuevoForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      id_cancha: new FormControl('',Validators.required),
   
    })

    ngOnInit(){

    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.TorneoCanchaService.RegistrarTorneoCanchas(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }
  onSalir(){}

}
