import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { CategoriaService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  
  get nombreNoValido(){ return this.editarForm.get('Nombres')?.invalid && this.editarForm.get('Nombres').touched }

  constructor( private categoriasService:CategoriaService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditarCategoriaComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: CategoriaI){}

  categorias !: CategoriaI[];

  editarForm = new FormGroup({
    NombreCategoria: new FormControl('',Validators.required),
    Descripcion: new FormControl('',Validators.required),
    EdadMin: new FormControl('',Validators.required),
    EdadMax: new FormControl('',Validators.required),
    EdadMujerMin: new FormControl('',Validators.required),
    EdadMujerMax: new FormControl('',Validators.required),
  })

  ngOnInit(){
    console.log(this.categoriaActual)
  }

  enEditar(form:any){
    if (form.valid){
      console.log(form.value)
    }else{
      console.log(form.value)
    }
  }

  setValues(){

  }

  onSalir(){}

}
