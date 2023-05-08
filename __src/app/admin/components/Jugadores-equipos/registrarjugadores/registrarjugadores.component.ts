import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Jugadore, JugadoresI } from 'src/app/models/equipos- jugadores.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EquiposJugadoresService } from 'src/app/services/equipos-jugadores.service';

@Component({
  selector: 'app-registrarjugadores',
  templateUrl: './registrarjugadores.component.html',
  styleUrls: ['./registrarjugadores.component.css']
})
export class RegistrarjugadoresComponent {
  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }

  constructor( private EquiposJugadoresService:EquiposJugadoresService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrarjugadoresComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: JugadoresI){}

    catjugador !: JugadoresI[];


    nuevoForm = new FormGroup({
      id_equipo: new FormControl('',Validators.required),
      id_jugador: new FormControl('',Validators.required),
      DorsalJugador: new FormControl('',[Validators.required]),
    })

    ngOnInit(){

    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.EquiposJugadoresService.RegistrarJugadorEquipo(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }

  onSalir(){}

}
