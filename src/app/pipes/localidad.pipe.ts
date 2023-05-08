import { Pipe, PipeTransform } from '@angular/core';
import { LocalidadesI } from '../models/localidades.interface';


@Pipe({
  name: 'LocalidadFilter'
})
export class LocalidadPipe implements PipeTransform {

  transform(localidad:LocalidadesI[] , search : string): LocalidadesI[] {
    
    console.log(search)
   if(search.length == 0){
    return localidad
   }

   search = search.toUpperCase()

   const fitleredUsuarios = localidad.filter( categoria => categoria.NombreLocalidad.toUpperCase().includes( search ));
   return fitleredUsuarios;
  }

}
