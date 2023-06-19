import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crudadmintorneo',
  templateUrl: './crudadmintorneo.component.html',
  styleUrls: ['./crudadmintorneo.component.css']
})
export class CrudadmintorneoComponent {
  constructor(private dialogRef: MatDialogRef<CrudadmintorneoComponent>) { }

  imageURL = ""
  generos = []
  codigo_postal = []
  codigo_postal_para_obtener_asentamientos = ""

  get nombreNoValido() { return this.nuevoForm.get('Nombres')?.invalid && this.nuevoForm.get('Nombres').touched }
  get ApellidoPaternoNoValido() { return this.nuevoForm.get('ApellidoPaterno')?.invalid && this.nuevoForm.get('ApellidoPaterno').touched }
  get ApellidoMaternoNoValido() { return this.nuevoForm.get('ApellidoMaterno')?.invalid && this.nuevoForm.get('ApellidoMaterno').touched }
  get emailNoValido() { return this.nuevoForm.get('email')?.invalid && this.nuevoForm.get('email').touched }
  get passwordNoValido() { return this.nuevoForm.get('password')?.invalid && this.nuevoForm.get('password').touched }
  get DomicilioNoValido() { return this.nuevoForm.get('Domicilio')?.invalid && this.nuevoForm.get('Domicilio').touched }
  get fechaNoValido() { return this.nuevoForm.get('Fecha_Nacimiento')?.invalid && this.nuevoForm.get('Fecha_Nacimiento').touched }
  get numSSNoValido() { return this.nuevoForm.get('numSS')?.invalid && this.nuevoForm.get('numSS').touched }
  get cpNoValido() { return this.nuevoForm.get('CP')?.invalid && this.nuevoForm.get('CP').touched }
  get curpNoValido() { return this.nuevoForm.get('curp')?.invalid && this.nuevoForm.get('curp').touched }
  get telefonoNoValido() { return this.nuevoForm.get('telefono')?.invalid && this.nuevoForm.get('telefono').touched }
  get referenciaNoValido() { return this.nuevoForm.get('referencia')?.invalid && this.nuevoForm.get('referencia').touched }
  get rolNoValido() { return this.nuevoForm.get('Id_Rol')?.invalid && this.nuevoForm.get('Id_Rol').touched }
  get asentaNoValido() { return this.nuevoForm.get('id_asenta')?.invalid && this.nuevoForm.get('id_asenta').touched }
  get torneoNoValido() { return this.nuevoForm.get('id_torneo')?.invalid && this.nuevoForm.get('id_torneo').touched }
  nuevoForm = new FormGroup({
    Nombres: new FormControl('', Validators.required),
    ApellidoPaterno: new FormControl('', Validators.required),
    ApellidoMaterno: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/)]),
    Domicilio: new FormControl('', Validators.required),
    Fecha_Nacimiento: new FormControl('2000/03/30', [Validators.required]),
    Id_Rol: new FormControl('', Validators.required),
    Id_Genero: new FormControl('', Validators.required),
    id_asenta: new FormControl('', Validators.required),
    CP: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]),
    referencia: new FormControl('', [Validators.required,]),
    numSS: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    curp: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/)]),
    Estatus: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    Id_torneo: new FormControl('', Validators.required),

  })
  postForm(si) {

  }

  onFileChanged(a) {


  }

  onSalir() {

  }

  obtenerAsentamientos() {

  }


}
