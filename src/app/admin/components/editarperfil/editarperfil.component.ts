import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActualizarUsuario } from 'src/app/services/actualizarusuario';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent implements OnInit {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private actualizarUsuarioService: ActualizarUsuario
  ) { }

  ngOnInit(): void {
    this.actualizarUsuarioService.ObtenerUsuario()
      .subscribe(response => {
        this.user = response.data; // Asigna los datos del usuario a la variable 'user'
        console.log(response.data);
      }, error => {
        console.error('Error al obtener los datos del usuario', error);
      });
  }
  
  


  updateUser() {
      console.log("datos del usuario:",this.user);
      this.actualizarUsuarioService.Actualizar(this.user)
        .subscribe(response => {
          console.log('Usuario actualizado correctamente', response);
        }, error => {
          console.error('Error al actualizar el usuario', error);
        });
  }
  
}
