import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TorneoEdicionRamaCategoriaI } from 'src/app/models/TorneoEdicionRamaCategoria.interface';
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

    nuevoForm = new FormGroup({
      id_torneo: new FormControl('',Validators.required),
      id_edicion: new FormControl('',Validators.required),
      id_rama: new FormControl('',Validators.required),
      id_categoria: new FormControl('',Validators.required),
      id_localidad: new FormControl('',Validators.required),
      fechaInicial: new FormControl('',Validators.required),
      fechaFinal: new FormControl('',Validators.required),
    })

    ngOnInit(){

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
