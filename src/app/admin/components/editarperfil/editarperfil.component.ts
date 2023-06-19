import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActualizarUsuario } from 'src/app/services/actualizarusuario';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent implements OnInit {
  user: any = {};
  formDatosUsuario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private actualizarUsuarioService: ActualizarUsuario
  ) {
    // Elimina la asignación de this.user.id del constructor
  }
  
  ngOnInit(): void {
    this.actualizarUsuarioService.ObtenerUsuario()
      .subscribe(response => {
        this.user = response.data;

        this.formDatosUsuario = new FormGroup({
          id: new FormControl(this.user.id),
          email: new FormControl(this.user.email),
          Nombres: new FormControl(this.user.Nombres),
          ApellidoPaterno: new FormControl(this.user.ApellidoPaterno),
          ApellidoMaterno: new FormControl(this.user.ApellidoMaterno),
          Domicilio: new FormControl(this.user.Domicilio),
          Fecha_Nacimiento: new FormControl(this.user.Fecha_Nacimiento),
          Estatus: new FormControl(this.user.Estatus),
          Id_Rol: new FormControl(this.user.Id_Rol),
          Id_Genero: new FormControl(this.user.ID_Genero),
          id_asenta: new FormControl(this.user.id_asenta_cpcons),
          CP: new FormControl(this.user.cp),
          telefono: new FormControl(this.user.telefono),
          curp: new FormControl(this.user.curp),
          numSS: new FormControl(this.user.numSS),
          referencia: new FormControl(this.user.referencia),
          imagen: new FormControl(''),
        });

        console.log(response.data);
      }, error => {
        console.error('Error al obtener los datos del usuario', error);
      });
  }

  updateUser() {
    console.log("datos del usuario:", this.user);
    console.log("formulario",this.formDatosUsuario);
    this.actualizarUsuarioService.Actualizar(this.formDatosUsuario.value)
      .subscribe(response => {
        console.log('Usuario actualizado correctamente', response);
        console.log(this.user);
      }, error => {
        console.error('Error al actualizar el usuario', error);
      });
  }
  
}


