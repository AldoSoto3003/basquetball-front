import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoAlbitroI } from 'src/app/models/torneoalbitro.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoAlbitroService } from 'src/app/services/torneo-albitro.service';
import { TorneoalbitroComponent } from '../torneoalbitro/torneoalbitro.component';
import { TorneoI } from 'src/app/models/torneo.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrartorneoalbitro',
  templateUrl: './registrartorneoalbitro.component.html',
  styleUrls: ['./registrartorneoalbitro.component.css']
})
export class RegistrartorneoalbitroComponent {
  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }


  constructor( private TorneoAlbitroService:TorneoAlbitroService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrartorneoalbitroComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: TorneoAlbitroI){}

    categorias !: TorneoalbitroComponent[];
    torneo !: TorneoI[];
   

    nuevoForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      id_arbitro: new FormControl('',Validators.required),
   
    })

    ngOnInit(){
      let token = localStorage.getItem('Token')
      this.TorneoAlbitroService.obtenerTorneos().subscribe( data => {
        this.torneo = data.data
      })

    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.TorneoAlbitroService.RegistrarTorneoArbitro(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }
  onSalir(){}

}
