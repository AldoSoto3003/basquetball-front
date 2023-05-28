import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JugadorA } from 'src/app/models/jugadoractivo.interface';
import { EquiposJugadoresService } from 'src/app/services/equipos-jugadores.service';
import { Respuesta } from 'src/app/models/jugadoractivo.interface';

@Component({
  selector: 'app-registrarjugadores',
  templateUrl: './registrarjugadores.component.html',
  styleUrls: ['./registrarjugadores.component.css']
})
export class RegistrarjugadoresComponent {
  nuevoForm: FormGroup;
  jugadoresActivos: JugadorA[];
  equipoSeleccionado: any;
  registroJugadorForm: FormGroup;
  alertService: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RegistrarjugadoresComponent >,
    private EquiposJugadoresService: EquiposJugadoresService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('Equipo', this.data.ID_Equipo);
    this.equipoSeleccionado = {id: this.data.ID_Equipo};
    console.log('primero',this.equipoSeleccionado);
    if (!this.data || !this.data.ID_Equipo && this.data.ID_Equipo !== 0) {
      console.error('No se especificó un ID de equipo válido');
      return;
    }
    console.log('llega el id del equipo hasta aqui', this.equipoSeleccionado);
    this.equipoSeleccionado = this.data.ID_Equipo || this.data.ID_Equipo === 0 ? this.data.ID_Equipo : null;
    this.ObtenerJugadoresActivos();
    this.nuevoForm = this.formBuilder.group({
      id_jugador: [null, Validators.required],
      DorsalJugador: [null, Validators.required],
    });

    this.registroJugadorForm = this.formBuilder.group({
      id_jugador: ['', Validators.required],
      DorsalJugador: ['', Validators.required]
    });
  }

  ObtenerJugadoresActivos() {
    console.log('llega el id del equipo hasta aqui Obtener', this.equipoSeleccionado);
    this.EquiposJugadoresService.ObtenerJugadoresActivos(this.equipoSeleccionado).subscribe(
      (respuesta: Respuesta) => {
        if (respuesta.status === 200) {
          this.jugadoresActivos = respuesta.data;
          this.equipoSeleccionado = this.equipoSeleccionado; // Definir la variable "equipoSeleccionado"
          console.log('dato',this.equipoSeleccionado);
        }
      
      },
      (error) => console.log(error)
    );
  }
  
  onRegister() {
    console.log('llega el id del equipo hasta aqui OnRegister', this.equipoSeleccionado);
    console.log('Equipo registro', this.equipoSeleccionado);
      const formData = {
        id_equipo: this.equipoSeleccionado,
        id_jugador: this.registroJugadorForm.value.id_jugador,
        DorsalJugador: this.registroJugadorForm.value.DorsalJugador
      };
      console.log('Equipo seleccionado:', this.equipoSeleccionado);
      console.log('jugador:',this.registroJugadorForm.value.id_jugador);
      console.log('dorsal:',this.registroJugadorForm.value.DorsalJugador);

      this.EquiposJugadoresService.RegistrarJugadorEquipo(formData).subscribe(
        (respuesta: Respuesta) => {
          console.log(respuesta);
          console.log('respuesta recibida');
          if (respuesta.status === 200) {
            console.log('Jugador registrado');
            
            this.dialogRef.close();
          }
        },
        (error) => console.log(error)
      );
    
  }
  
  
  

}
