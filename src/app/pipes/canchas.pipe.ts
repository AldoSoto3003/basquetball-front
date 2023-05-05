import { Pipe, PipeTransform } from '@angular/core';
import { CanchasI } from '../models/InformacionCanchas.model';


@Pipe({
  name: 'CanchasFilter'
})
export class CanchasPipe implements PipeTransform {

  transform(cancha:CanchasI[] , search : string): CanchasI[] {
    
    console.log(search)
   if(search.length == 0){
    return cancha
   }

   search = search.toUpperCase()

   const fitleredUsuarios = cancha.filter( categoria => categoria.NombreCancha.toUpperCase().includes( search ));
   return fitleredUsuarios;
  }

}
