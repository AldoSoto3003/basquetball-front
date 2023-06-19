import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CodigoPostal } from 'src/app/models/codigoPostal.interface';
import { ActualizarUsuario } from 'src/app/services/actualizarusuario';
import { AlertasService } from 'src/app/services/alertas.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent implements OnInit {
  formDatosUsuario: FormGroup;
  imgURL: any;
  reader = new FileReader();
  public imagePath: any;
  public message: string;
  codigo_postal !: CodigoPostal[];
  codigo_postal_para_obtener_asentamientos: '';
  base64: string;
  imageURL: any;



  constructor(private actualizarUsuarioService: ActualizarUsuario, private activerouter: ActivatedRoute,  private alertService: AlertasService,) { }

  
  get nombreNoValido() { return this.formDatosUsuario.get('Nombres')?.invalid && this.formDatosUsuario.get('Nombres').touched }
  get ApellidoPaternoNoValido() { return this.formDatosUsuario.get('ApellidoPaterno')?.invalid && this.formDatosUsuario.get('ApellidoPaterno').touched }
  get ApellidoMaternoNoValido() { return this.formDatosUsuario.get('ApellidoMaterno')?.invalid && this.formDatosUsuario.get('ApellidoMaterno').touched }
  get emailNoValido() { return this.formDatosUsuario.get('email')?.invalid && this.formDatosUsuario.get('email').touched }
  get DomicilioNoValido() { return this.formDatosUsuario.get('Domicilio')?.invalid && this.formDatosUsuario.get('Domicilio').touched }
  get fechaNoValido() { return this.formDatosUsuario.get('Fecha_Nacimiento')?.invalid && this.formDatosUsuario.get('Fecha_Nacimiento').touched }
  get numSSNoValido() { return this.formDatosUsuario.get('numSS')?.invalid && this.formDatosUsuario.get('numSS').touched }
  get cpNoValido() { return this.formDatosUsuario.get('CP')?.invalid && this.formDatosUsuario.get('CP').touched }
  get curpNoValido() { return this.formDatosUsuario.get('curp')?.invalid && this.formDatosUsuario.get('curp').touched }
  get telefonoNoValido() { return this.formDatosUsuario.get('telefono')?.invalid && this.formDatosUsuario.get('telefono').touched }
  get referenciaNoValido() { return this.formDatosUsuario.get('referencia')?.invalid && this.formDatosUsuario.get('referencia').touched }
  get rolNoValido() { return this.formDatosUsuario.get('Id_Rol')?.invalid && this.formDatosUsuario.get('Id_Rol').touched }
  get asentaNoValido() { return this.formDatosUsuario.get('id_asenta')?.invalid && this.formDatosUsuario.get('id_asenta').touched }

  
  ngOnInit(): void {
    this.formDatosUsuario = new FormGroup({
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
  

  
  this.ObtenerInfoUsuario();
  }

 
  

   ObtenerInfoUsuario(){
    this.actualizarUsuarioService.ObtenerUsuario()
    .subscribe(response => {
      console.log(response.data);
      
      this.imgURL=response.data.urlImagen;
      this.formDatosUsuario.controls["id"].setValue(String(response.data.id))
      this.formDatosUsuario.controls["Nombres"].setValue(response.data.Nombres)
      this.formDatosUsuario.controls["ApellidoPaterno"].setValue(response.data.ApellidoPaterno)
      this.formDatosUsuario.controls["ApellidoMaterno"].setValue(response.data.ApellidoMaterno)
      this.formDatosUsuario.controls["email"].setValue(response.data.email)
      this.formDatosUsuario.controls["Domicilio"].setValue(response.data.Domicilio)
      this.formDatosUsuario.controls["Fecha_Nacimiento"].setValue(String(response.data.Fecha_Nacimiento))
      this.formDatosUsuario.controls["Id_Rol"].setValue(String(response.data.Id_Rol))
      this.formDatosUsuario.controls["CP"].setValue(response.data.cp)
      this.formDatosUsuario.controls["id_asenta"].setValue(String(response.data.id_asenta_cpcons))
      this.formDatosUsuario.controls["curp"].setValue(response.data.curp)
      this.formDatosUsuario.controls["telefono"].setValue(response.data.telefono)
      this.formDatosUsuario.controls["Id_Genero"].setValue(String(response.data.ID_Genero))
      this.formDatosUsuario.controls["numSS"].setValue(response.data.numSS)
      this.formDatosUsuario.controls["referencia"].setValue(response.data.referencia)

      console.log(response.data.data);
    }, error => {
      console.error('Error al obtener los datos del usuario', error);
    });
   }
  updateUser() {
    console.log("datos del usuario:", this.formDatosUsuario);
    console.log("formulario",this.formDatosUsuario.value);
    this.actualizarUsuarioService.Actualizar(this.formDatosUsuario.value)
      .subscribe(response => {
        console.log('Usuario actualizado correctamente', response);
        
      }, error => {
        console.error('Error al actualizar el usuario', error);
      });
  }

  obtenerAsentamientos() {
    this.codigo_postal_para_obtener_asentamientos = this.formDatosUsuario.controls["CP"].value
    if (this.codigo_postal_para_obtener_asentamientos.length == 5) {
      const codigo_postal = { 'CP': this.codigo_postal_para_obtener_asentamientos }
      this.actualizarUsuarioService.ObtenerCodigoPostal(codigo_postal).subscribe(data => {
        this.codigo_postal = data.data
      })
    }
  }

  onFileChanged(event) {
    if (event.target.files) {
      this.reader.readAsDataURL(event.target.files[0]);
      this.reader.onload = (event: any) => {
        this.imageURL = event.target.result
        this.base64 = this.reader.result as string;
        this.formDatosUsuario.controls["imagen"].setValue(this.base64)
      }
    }
  }
  
}


