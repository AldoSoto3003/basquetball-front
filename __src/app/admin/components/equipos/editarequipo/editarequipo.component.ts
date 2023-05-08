import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { equiposI } from 'src/app/models/equipos.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-editarequipo',
  templateUrl: './editarequipo.component.html',
  styleUrls: ['./editarequipo.component.css']
})
export class EditarequipoComponent {
  constructor( private EquiposService:EquiposService,private router:Router, private alertService:AlertasService
    ,private dialogRef: MatDialogRef<EditarequipoComponent>, @Inject(MAT_DIALOG_DATA) public categoriaActual: equiposI){}

    categorias !: equiposI[];
    codigo_postal !: CodigoPostal[];
    codigo_postal_para_obtener_asentamientos = ''

    editarForm = new FormGroup({
      id: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
      Nombre: new FormControl('',Validators.required),
      id_asenta_cpcons:new FormControl('',Validators.required),
      ID_Usuario:new FormControl('',Validators.required),
      cp:new FormControl('',Validators.required),
      Estatus: new FormControl('',Validators.required),
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

    obtenerAsentamientos(){
      this.codigo_postal_para_obtener_asentamientos = this.editarForm.controls["CP"].value
      if (this.codigo_postal_para_obtener_asentamientos.length == 5){
        const codigo_postal = {'CP':this.codigo_postal_para_obtener_asentamientos}
        this.EquiposService.ObtenerCodigoPostal(codigo_postal).subscribe(data=>{
          this.codigo_postal = data.data
        })
      }
    }
  
  
    onSalir(){}

}
