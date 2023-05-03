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
    id: new FormControl('',Validators.required),
    NombreCategoria: new FormControl('',Validators.required),
    Descripcion: new FormControl('',Validators.required),
    EdadMin: new FormControl('',Validators.required),
    EdadMax: new FormControl('',Validators.required),
    EdadMujerMin: new FormControl('',Validators.required),
    EdadMujerMax: new FormControl('',Validators.required),
    Estatus: new FormControl('',Validators.required)
  })

  ngOnInit(){
    console.log(this.categoriaActual)
    this.setValues()
  }

  enEditar(form:any){
    if (form.valid){
      this.categoriasService.EditarUnaCategoria(form.value).subscribe( data =>{ 
        if (data.status == 200){
          this.alertService.showSuccess(data.message,'Correcto');
          this.dialogRef.close(true)
        }else{this.alertService.showError(data.message,'Error')}
      }),error => { console.log(error)}
    }else{
      this.dialogRef.close(false)
      this.alertService.showError("Error","formulario incorrecto");
    }
  }

  setValues(){
    this.editarForm.controls['id'].setValue(String(this.categoriaActual.id))
    this.editarForm.controls['NombreCategoria'].setValue(this.categoriaActual.NombreCategoria)
    this.editarForm.controls['Descripcion'].setValue(this.categoriaActual.Descripcion)
    this.editarForm.controls['EdadMin'].setValue(String(this.categoriaActual.EdadMin))
    this.editarForm.controls['EdadMax'].setValue(String(this.categoriaActual.EdadMax))
    this.editarForm.controls['EdadMujerMin'].setValue(String(this.categoriaActual.EdadMujerMin))
    this.editarForm.controls['EdadMujerMax'].setValue(String(this.categoriaActual.EdadMujerMax))
    this.editarForm.controls['Estatus'].setValue(String(this.categoriaActual.Estatus))
  }

  onSalir(){}

}
