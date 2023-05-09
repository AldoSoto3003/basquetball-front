import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { edicionesI } from 'src/app/models/ediciones.interface';
import { JugadoresI } from 'src/app/models/equipos- jugadores.interface';
import { equiposI } from 'src/app/models/equipos.interface';
import { RamaI } from 'src/app/models/ramas.interface';
import { TorneoI } from 'src/app/models/torneo.interface';
import { torneoeEdiRamaCatEquipoI } from 'src/app/models/torneoeEdiRamaCatEquipo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoEdiRamaCatEquipoService } from 'src/app/services/torneo-edi-rama-cat-equipo.service';

@Component({
  selector: 'app-registrar-tercej',
  templateUrl: './registrar-tercej.component.html',
  styleUrls: ['./registrar-tercej.component.css']
})
export class RegistrarTercejComponent {


  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }
  
  constructor( private TorneoEdiRamaCatEquipoService:TorneoEdiRamaCatEquipoService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrarTercejComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: torneoeEdiRamaCatEquipoI){}

    categorias !: torneoeEdiRamaCatEquipoI[];
    roles !:TorneoI[];
    ediciones!:edicionesI[];
    rama!: RamaI[];
    cat!:CategoriaI[];
    equipos!:equiposI[];
    jugadores!:JugadoresI[];

    nuevoForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      id_edicion: new FormControl('',Validators.required),
      id_rama: new FormControl('',Validators.required),
      id_categoria: new FormControl('',Validators.required),
      id_equipo: new FormControl('',Validators.required),
      id_jugador: new FormControl('',Validators.required),
    })

    ngOnInit(){
      let token = localStorage.getItem('Token')

      //Obtener los roles de la BDD
      this.TorneoEdiRamaCatEquipoService.obtenerTorneos().subscribe( data => {
        this.roles = data.data
      })

      this.TorneoEdiRamaCatEquipoService.ObtenerTodasLasEdiciones().subscribe( data => {
        this.ediciones = data.data
      })

      this.TorneoEdiRamaCatEquipoService.ObtenerRamas().subscribe( data => {
        this.rama = data.data
      })
      this.TorneoEdiRamaCatEquipoService.ObtenerTodasLasCategorias().subscribe( data => {
        this.cat = data.data
      })
      this.TorneoEdiRamaCatEquipoService.ObtenerEquipos().subscribe( data => {
        this.equipos = data.data
      })

      this.TorneoEdiRamaCatEquipoService.ObtenerJugadoresActivos().subscribe( data => {
        this.jugadores = data.data
      })
    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.TorneoEdiRamaCatEquipoService.RegistrarTERCEJ(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }
  onSalir(){}
}
