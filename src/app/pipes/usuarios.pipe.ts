import { Pipe, PipeTransform } from '@angular/core';
import { ListaUsuariosI } from '../models/Usuario.model';

@Pipe({
  name: 'UsuariosFilter'
})
export class UsuariosPipe implements PipeTransform {

  transform( usuarios:ListaUsuariosI[],search: string): ListaUsuariosI[] {
    let rol,email
    rol = localStorage.getItem("rol")
    email = localStorage.getItem("email")
    email = email.replaceAll('"','')
    console.log(email)
    if (rol == '3'){
      const filteredUsersByRol = usuarios.filter( usuario => usuario.Id_Rol.toString().includes(rol) && usuario.email.includes(email))
      const filteredJustMe = filteredUsersByRol.filter( usuario => usuario.email.includes( email ))
      return filteredUsersByRol
    }


    if( search.length === 0){
      return usuarios
    }

    search = search.toUpperCase()
    const fitleredUsuarios = usuarios.filter( usuario => usuario.datos_usuario.Nombres.toUpperCase().includes( search ));
    
    return fitleredUsuarios;
  }

}
