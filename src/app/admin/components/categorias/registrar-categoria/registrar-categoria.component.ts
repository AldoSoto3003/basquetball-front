import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { CategoriaService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent {

  get nombreNoValido(){ return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }

  constructor( private categoriasService:CategoriaService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<RegistrarCategoriaComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: CategoriaI){}

  categorias !: CategoriaI[];

  nuevoForm = new FormGroup({
    NombreCategoria: new FormControl('',Validators.required),
    Descripcion: new FormControl('',Validators.required),
    EdadMin: new FormControl('',[Validators.required]),
    EdadMax: new FormControl('',Validators.required),
    EdadMujerMin: new FormControl('',Validators.required),
    EdadMujerMax: new FormControl('',Validators.required),
  })

  ngOnInit(){

  }

  onRegister(form:any){
      if (form.valid){
        console.log('Este es el form',form)
        this.categoriasService.registrarUnaCategoria(form.value).subscribe( data => {
          if (data.status == 200){this.alertService.showSuccess(data.message,'Correcto')}
          else{this.alertService.showError(data.message,'Error')}
        }), error => this.alertService.showError('Error',error)
      }else{
        console.log('Este es el form',form)
        this.alertService.showError('Formulario no valido','Fallo')
      }
  }

  onSalir(){}


}
