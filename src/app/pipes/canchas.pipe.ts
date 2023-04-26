import { Pipe, PipeTransform } from '@angular/core';
import { CanchasI } from '../models/InformacionCanchas.model';


@Pipe({
  name: 'canchasFilter'
})
export class CanchasPipe implements PipeTransform {

  transform(canchas:CanchasI[] , search : string): CanchasI[] {
    console.log(search)
   if(search.length == 0){
    return canchas
   }

   search = search.toUpperCase()

   const fitleredUsuarios = canchas.filter( categoria => categoria.NombreCancha.toUpperCase().includes( search ));
   return fitleredUsuarios;
  }

}
