import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TorneoEdicionRamaCategoriaService } from 'src/app/services/torneo-edicion-rama-categoria.service';
import { TorneoEdicionRamaCategoriaI } from 'src/app/models/TorneoEdicionRamaCategoria.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoI } from 'src/app/models/torneo.interface';
import { edicionesI } from 'src/app/models/ediciones.interface';
import { RamaI } from 'src/app/models/ramas.interface';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { LocalidadesI } from 'src/app/models/localidades.interface';

@Component({
  selector: 'app-modificar-terc',
  templateUrl: './modificar-terc.component.html',
  styleUrls: ['./modificar-terc.component.css']
})
export class ModificarTercComponent {
  constructor( private TorneoEdicionRamaCategoriaService:TorneoEdicionRamaCategoriaService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<ModificarTercComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: TorneoEdicionRamaCategoriaI){}


    get fechaInicialValido(){ return this.editarForm.get('fechaInicial')?.invalid && this.editarForm.get('fechaInicial').touched }
    get fechafinalValido(){ return this.editarForm.get('fechaFinal')?.invalid && this.editarForm.get('fechaFinal').touched }

   categorias !: TorneoEdicionRamaCategoriaI[];
   roles !:TorneoI[];
   ediciones!:edicionesI[];
   rama!: RamaI[];
   cat!:CategoriaI[];
   localidad!:LocalidadesI[];
  
 
   model: NgbDateStruct; 
   public message: string;


  editarForm = new FormGroup({
    id_torneo: new FormControl('',Validators.required),
    id_edicion: new FormControl('',Validators.required),
    id_rama: new FormControl('',Validators.required),
    id_categoria: new FormControl('',Validators.required),
    id_localidad: new FormControl('',Validators.required),
    fechaInicial: new FormControl('',Validators.required),
    fechaFinal: new FormControl('',Validators.required),
    Estatus: new FormControl('',Validators.required),
           
  })


  ngOnInit(): void {

    this.setDatos()
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

  onUpdate(form:any){
    if (form.valid){
      console.log('Valido',form.value)
      
      this.TorneoEdicionRamaCategoriaService.ModificarTorneoEdicionRamaCategoria(form.value).subscribe( data => {
        this.alertService.showSuccess('Formulario valido','Exito')
      }), error =>{ this.alertService.showError('Ocurrio un error',error.error.data)}

    }else{
      console.log('No valido',form.value)
      this.alertService.showError('Formulario no valido','Fallo')
    }
  }

setDatos(){
  this.editarForm.controls["id_torneo"].setValue (String(this.categoriaActual.id_torneo))
  this.editarForm.controls["id_edicion"].setValue(String(this.categoriaActual.id_edicion))
  this.editarForm.controls["id_rama"].setValue(String(this.categoriaActual.id_rama))
  this.editarForm.controls["id_categoria"].setValue(String(this.categoriaActual.id_categoria))
  this.editarForm.controls["id_localidad"].setValue(String(this.categoriaActual.id_localidad))
  this.editarForm.controls["fechaInicial"].setValue(String(this.categoriaActual.fechaInicial))
  this.editarForm.controls["fechaFinal"].setValue(String(this.categoriaActual.fechaFinal))
  this.editarForm.controls["Estatus"].setValue(this.categoriaActual.Estatus)
  

  
}




onSalir(){}

}
