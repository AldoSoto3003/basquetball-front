import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { Generos } from 'src/app/models/Generos.interface';
import { Roles } from 'src/app/models/roles.interface';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  constructor(private userService: UserService, private activerouter: ActivatedRoute, private router: Router, private alertService: AlertasService,
    public dialogRef: MatDialogRef<EditarUsuarioComponent>, @Inject(MAT_DIALOG_DATA) public usuarioActual: ListaUsuariosI) { }

  get nombreNoValido() { return this.editarForm.get('Nombres')?.invalid && this.editarForm.get('Nombres').touched }
  get ApellidoPaternoNoValido() { return this.editarForm.get('ApellidoPaterno')?.invalid && this.editarForm.get('ApellidoPaterno').touched }
  get ApellidoMaternoNoValido() { return this.editarForm.get('ApellidoMaterno')?.invalid && this.editarForm.get('ApellidoMaterno').touched }
  get emailNoValido() { return this.editarForm.get('email')?.invalid && this.editarForm.get('email').touched }
  get DomicilioNoValido() { return this.editarForm.get('Domicilio')?.invalid && this.editarForm.get('Domicilio').touched }
  get fechaNoValido() { return this.editarForm.get('Fecha_Nacimiento')?.invalid && this.editarForm.get('Fecha_Nacimiento').touched }
  get numSSNoValido() { return this.editarForm.get('numSS')?.invalid && this.editarForm.get('numSS').touched }
  get cpNoValido() { return this.editarForm.get('CP')?.invalid && this.editarForm.get('CP').touched }
  get curpNoValido() { return this.editarForm.get('curp')?.invalid && this.editarForm.get('curp').touched }
  get telefonoNoValido() { return this.editarForm.get('telefono')?.invalid && this.editarForm.get('telefono').touched }
  get referenciaNoValido() { return this.editarForm.get('referencia')?.invalid && this.editarForm.get('referencia').touched }
  get rolNoValido() { return this.editarForm.get('Id_Rol')?.invalid && this.editarForm.get('Id_Rol').touched }
  get asentaNoValido() { return this.editarForm.get('id_asenta')?.invalid && this.editarForm.get('id_asenta').touched }

  usuarios !: ListaUsuariosI[];
  roles !: Roles[];
  generos !: Generos[];
  codigo_postal !: CodigoPostal[];
  codigo_postal_para_obtener_asentamientos = ''
  curp_regex: string = ''
  base64: string;
  imageURL: any;
  reader = new FileReader();
  public imagePath: any;
  public message: string;

  editarForm = new FormGroup({
    id: new FormControl(''),
    Nombres: new FormControl('', Validators.required),
    ApellidoPaterno: new FormControl('', Validators.required),
    ApellidoMaterno: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    Domicilio: new FormControl('', Validators.required),
    Fecha_Nacimiento: new FormControl('', Validators.required),
    Id_Rol: new FormControl('', Validators.required),
    Id_Genero: new FormControl('', Validators.required),
    id_asenta: new FormControl('', Validators.required),
    CP: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]),
    numSS: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    curp: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/)]),
    referencia: new FormControl('', Validators.required),
    imagen: new FormControl(''),
  })


  ngOnInit(): void {
    //Obtener los roles de la BDD
    this.userService.ObtenerLosRoles().subscribe(data => {
      this.roles = data.data
    })

    this.userService.ObtenerLosGeneros().subscribe(data => {
      this.generos = data.data
    })
    this.setDatos()
    this.obtenerAsentamientos();

  }

  postForm(form: any) {
    if (form.valid) {
      console.log('Valido', form.value)
      this.userService.EditarUnUsuario(form.value).subscribe(data => {
        if (data.status == 200) {
          this.dialogRef.close(true)
          this.alertService.showSuccess(data.message, 'Correcto')
        } else {
          this.dialogRef.close(false)
          this.alertService.showError(data.message, 'Error')
        }
      }), error => { this.alertService.showError('Ocurrio un error', error.error.data) }

    } else {
      console.log('No valido', form.value)
      this.dialogRef.close(false)
      this.alertService.showError('Formulario no valido', 'Fallo')
    }
  }

  setDatos() {
    this.base64 = this.usuarioActual.urlImagen
    this.editarForm.controls["id"].setValue(String(this.usuarioActual.id))
    this.editarForm.controls["Nombres"].setValue(this.usuarioActual.datos_usuario.Nombres)
    this.editarForm.controls["ApellidoPaterno"].setValue(this.usuarioActual.datos_usuario.ApellidoPaterno)
    this.editarForm.controls["ApellidoMaterno"].setValue(this.usuarioActual.datos_usuario.ApellidoMaterno)
    this.editarForm.controls["email"].setValue(this.usuarioActual.email)
    this.editarForm.controls["Domicilio"].setValue(this.usuarioActual.datos_usuario.Domicilio)
    this.editarForm.controls["Fecha_Nacimiento"].setValue(String(this.usuarioActual.datos_usuario.Fecha_Nacimiento))
    this.editarForm.controls["Id_Rol"].setValue(String(this.usuarioActual.Id_Rol))
    this.editarForm.controls["CP"].setValue(this.usuarioActual.datos_usuario.cp)
    this.editarForm.controls["id_asenta"].setValue(String(this.usuarioActual.datos_usuario.id_asenta_cpcons))
    this.editarForm.controls["curp"].setValue(this.usuarioActual.datos_usuario.curp)
    this.editarForm.controls["telefono"].setValue(this.usuarioActual.datos_usuario.telefono)
    this.editarForm.controls["Id_Genero"].setValue(String(this.usuarioActual.ID_Genero))
    this.editarForm.controls["numSS"].setValue(this.usuarioActual.datos_usuario.numSS)
    this.editarForm.controls["referencia"].setValue(this.usuarioActual.datos_usuario.referencia)
    this.imageURL = this.base64
  }
  onFileChanged(event) {
    if (event.target.files) {
      this.reader.readAsDataURL(event.target.files[0]);
      this.reader.onload = (event: any) => {
        this.imageURL = event.target.result
        this.base64 = this.reader.result as string;
        this.editarForm.controls["imagen"].setValue(this.base64)
      }
    }
  }
  obtenerAsentamientos() {
    this.codigo_postal_para_obtener_asentamientos = this.editarForm.controls["CP"].value
    if (this.codigo_postal_para_obtener_asentamientos.length == 5) {
      const codigo_postal = { 'CP': this.codigo_postal_para_obtener_asentamientos }
      this.userService.ObtenerCodigoPostal(codigo_postal).subscribe(data => {
        this.codigo_postal = data.data
      })
    }
  }

  onSalir() {
    this.router.navigate(['admin/usuarios'])
  }
}
