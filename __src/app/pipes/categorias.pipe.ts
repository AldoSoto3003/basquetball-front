import { Pipe, PipeTransform } from '@angular/core';
import { CategoriaI } from '../models/categoria.interface';

@Pipe({
  name: 'categoriasFilter'
})
export class CategoriasPipe implements PipeTransform {

  transform(categorias:CategoriaI[],search: string): CategoriaI[] {
    console.log(search)
    if( search.length === 0){
      return categorias
    }

    search = search.toUpperCase()
    const fitleredUsuarios = categorias.filter( categoria => categoria.NombreCategoria.toUpperCase().includes( search ));
    
    return fitleredUsuarios;
  }

}
