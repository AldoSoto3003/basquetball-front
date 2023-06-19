import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EdicionesTorneoI } from 'src/app/models/Edicionestorneo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EquiposTorneoService } from 'src/app/services/equipos-torneo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TorneoI } from 'src/app/models/torneo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipotorneo',
  templateUrl: './equipotorneo.component.html',
  styleUrls: ['./equipotorneo.component.css']
})
export class EquipotorneoComponent {

  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }

  get fechaInicialValido(){ return this.nuevoForm.get('fechaInicial')?.invalid && this.nuevoForm.get('fechaInicial').touched }
  get fechafinalValido(){ return this.nuevoForm.get('fechaFinal')?.invalid && this.nuevoForm.get('fechaFinal').touched }


  constructor( private EquiposTorneoService:EquiposTorneoService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EquipotorneoComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual:  EdicionesTorneoI){}

    categorias !: EquiposTorneoService[];
    roles !:TorneoI[];



    nuevoForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
    })

    ngOnInit(){
      let token = localStorage.getItem('Token')

      //Obtener los roles de la BDD
      this.EquiposTorneoService.obtenerTorneos().subscribe( data => {
        this.roles = data.data
      })

    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.EquiposTorneoService.RegistrarEdicionTorneo(form.value).subscribe( data => {
          if (data.status == 200){
            this.alertService.showSuccess(data.message,'Correcto')
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
