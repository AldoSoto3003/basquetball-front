import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jugadore, JugadoresI } from 'src/app/models/equipos- jugadores.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { RegistrarjugadoresComponent } from '../registrarjugadores/registrarjugadores.component';
import { EquiposJugadoresService } from 'src/app/services/equipos-jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})

export class JugadoresComponent {
  catjugador: JugadoresI[];
  p: number = 1;
  public searchCategoria: string = "";
  equipoSeleccionado: string;
  equipos: any[];
  jugadores: Jugadore[] = [];
  id_equipo: any;
  id_jugador: any;

  constructor(
    private equiposJugadoresService: EquiposJugadoresService,
    private alertService: AlertasService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.equiposJugadoresService.ObtenerEquiposActivos().subscribe(data => {
      let dataResponse: any[] = data.data;
      console.log(dataResponse);
      this.equipos = dataResponse;
    }, error => {
      console.log('Error al obtener equipos', error);
    });

    let id; // Id de equipo por defecto
    this.ObtenerJugadoresEquipo(id);
  }

  onSearch(busqueda: string): void {
    this.searchCategoria = busqueda;
  }

  onRegister(): void {
    this.openDialogRegistrar('0ms', '0ms');
  }

  onSelectEquipo(): void {
    if (this.equipoSeleccionado) {
      this.ObtenerJugadoresEquipo(this.equipoSeleccionado);
    } else {
      console.log("Seleccione un equipo");
    }
  }

  MostrarEquipo(): void {
    if (this.equipoSeleccionado) {
      this.ObtenerJugadoresEquipo(this.equipoSeleccionado);
    } else {
      console.log("Seleccione un equipo");
    }
  }
  
  
  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string, data: any = ""): void {
    if (!this.equipoSeleccionado) {
      console.log("Seleccione un equipo");
      return;
    }
    console.log("ID Equipo seleccionado:", this.equipoSeleccionado);
    this.dialog.open(RegistrarjugadoresComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        ID_Equipo: this.equipoSeleccionado
      }
    });
  }
  
  

  private ObtenerJugadoresEquipo(id: string): void {
    this.equiposJugadoresService.ObtenerJugadoresEquipo(id).subscribe(respuesta => {
      if (respuesta && respuesta.data && respuesta.data.jugadores) {
        this.jugadores = respuesta.data.jugadores;
      } else {
        this.jugadores = [];
      }
    }, error => {
      console.log('error al obtener jugadores del equipo', error);
    });
  }


  onDelete(id_equipo: any, id_jugador: any){
    console.log(id_jugador);
    console.log(id_equipo);
    this.equiposJugadoresService.EliminarJugadorEquipo(id_equipo, id_jugador).subscribe( data => {
      console.log(data)
      this.ngOnInit()
    })
  }


}
