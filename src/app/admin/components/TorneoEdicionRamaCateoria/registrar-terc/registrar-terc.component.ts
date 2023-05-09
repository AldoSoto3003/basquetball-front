import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoEdicionRamaCategoriaI } from 'src/app/models/TorneoEdicionRamaCategoria.interface';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { edicionesI } from 'src/app/models/ediciones.interface';
import { LocalidadesI } from 'src/app/models/localidades.interface';
import { RamaI } from 'src/app/models/ramas.interface';
import { TorneoI } from 'src/app/models/torneo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoEdicionRamaCategoriaService } from 'src/app/services/torneo-edicion-rama-categoria.service';

@Component({
  selector: 'app-registrar-terc',
  templateUrl: './registrar-terc.component.html',
  styleUrls: ['./registrar-terc.component.css']
})
export class RegistrarTercComponent {

  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }

  get fechaInicialValido(){ return this.nuevoForm.get('fechaInicial')?.invalid && this.nuevoForm.get('fechaInicial').touched }
  get fechafinalValido(){ return this.nuevoForm.get('fechaFinal')?.invalid && this.nuevoForm.get('fechaFinal').touched }

  
  constructor( private TorneoEdicionRamaCategoriaService:TorneoEdicionRamaCategoriaService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrarTercComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: TorneoEdicionRamaCategoriaI){}

    categorias !: TorneoEdicionRamaCategoriaI[];
    roles !:TorneoI[];
    ediciones!:edicionesI[];
    rama!: RamaI[];
    cat!:CategoriaI[];
    localidad!:LocalidadesI[];

    nuevoForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      id_edicion: new FormControl('',Validators.required),
      id_rama: new FormControl('',Validators.required),
      id_categoria: new FormControl('',Validators.required),
      id_localidad: new FormControl('',Validators.required),
      fechaInicial: new FormControl('',Validators.required),
      fechaFinal: new FormControl('',Validators.required),
      NumEquiposMin: new FormControl('',Validators.required),
	    NumEquiposMax: new FormControl('',Validators.required),
    })

    ngOnInit(){
      let token = localStorage.getItem('Token')

      //Obtener los roles de la BDD
      this.TorneoEdicionRamaCategoriaService.obtenerTorneos().subscribe( data => {
        this.roles = data.data
      })

      this.TorneoEdicionRamaCategoriaService.ObtenerTodasLasEdiciones().subscribe( data => {
        this.ediciones = data.data
      })

      this.TorneoEdicionRamaCategoriaService.ObtenerRamas().subscribe( data => {
        this.rama = data.data
      })
      this.TorneoEdicionRamaCategoriaService.ObtenerTodasLasCategorias().subscribe( data => {
        this.cat = data.data
      })
      this.TorneoEdicionRamaCategoriaService.ObtenerLocalidades().subscribe( data => {
        this.localidad = data.data
      })
    }
    onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.TorneoEdicionRamaCategoriaService.RegistrarTorneoEdicionRamaCategoria(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }
  onSalir(){}

}
