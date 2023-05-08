import { Pipe, PipeTransform } from '@angular/core';
import { edicionesI } from '../models/ediciones.interface';


@Pipe({
  name: 'EdicionesFilter'
})
export class EdicionesPipe implements PipeTransform {

  transform(categoria:edicionesI[] , search : string): edicionesI[] {
    
    console.log(search)
   if(search.length == 0){
    return categoria
   }

   search = search.toUpperCase()

   const fitleredUsuarios = categoria.filter( categoria => categoria.descripcion.toUpperCase().includes( search ));
   return fitleredUsuarios;
  }

}
