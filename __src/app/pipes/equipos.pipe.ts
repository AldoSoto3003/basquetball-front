import { Pipe, PipeTransform } from '@angular/core';
import { equiposI } from '../models/equipos.interface';


@Pipe({
  name: 'EquipoFilter'
})
export class EquiposPipe implements PipeTransform {

  transform(equipos:equiposI[] , search : string): equiposI[] {
    
    console.log(search)
   if(search.length == 0){
    return equipos
   }

   search = search.toUpperCase()

   const fitleredUsuarios = equipos.filter( categoria => categoria.Nombre.toUpperCase().includes( search ));
   return fitleredUsuarios;
  }

}
