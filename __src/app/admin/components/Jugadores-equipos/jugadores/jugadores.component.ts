import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jugadore, JugadoresI } from 'src/app/models/equipos- jugadores.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EquiposJugadoresService } from 'src/app/services/equipos-jugadores.service';
import { RegistrarjugadoresComponent } from '../registrarjugadores/registrarjugadores.component';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})

export class JugadoresComponent {
  constructor( private EquiposJugadoresService:EquiposJugadoresService,private alertService:AlertasService ,private dialog:MatDialog){}

  catjugador: JugadoresI[];
  p:number = 1;
  public searchCategoria : string = ""

  ngOnInit(){
    let id = "1"
    this.EquiposJugadoresService.ObtenerJugadoresEquipo(id).subscribe( data => {
      console.log(data)
      this.catjugador = data.data
    }), error => { console.log('error categoria oninit',error)}
  }

  onSearch(busqueda:string){
    this.searchCategoria = busqueda
  }

  onRegister(){
    this.openDialogRegistrar('0ms','0ms')
  }

 
  onDelete(id){
    this.EquiposJugadoresService.EliminarJugadorEquipo(id).subscribe( data => {
      this.alertService.showSuccess('La categoria se elimino','Exito!')
    }), error => { this.alertService.showError('Error',error.error.data)}
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrarjugadoresComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }



}
