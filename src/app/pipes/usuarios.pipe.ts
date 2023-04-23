import { Pipe, PipeTransform } from '@angular/core';
import { ListaUsuariosI } from '../models/Usuario.model';

@Pipe({
  name: 'UsuariosFilter'
})
export class UsuariosPipe implements PipeTransform {

  transform( usuarios:ListaUsuariosI[],search: string): ListaUsuariosI[] {
    
    if( search.length === 0){
      return usuarios
    }

    search = search.toUpperCase()
    const fitleredUsuarios = usuarios.filter( usuario => usuario.datos_usuario.Nombres.toUpperCase().includes( search ));
    
    return fitleredUsuarios;
  }

}
