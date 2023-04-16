import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios !: ListaUsuariosI[];

  constructor(private router:Router, private userService:UserService){ }

  ngOnInit():void{
    this.userService.obtenerUsuarios().subscribe( data => {
      let dataResponse:any[] = data.data
      this.usuarios = dataResponse
    })

    this.userService.obtenerUnUsuario(1).subscribe( data => {
      console.log(data)
    })
    }

    onDelete(idUsuario:any){
      this.userService.EliminarUnUsuario(idUsuario).subscribe( data => {
        this.ngOnInit()
      })
    }
}
