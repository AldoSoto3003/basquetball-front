import { Component } from '@angular/core';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { CategoriaService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  constructor( private categoriaService:CategoriaService){}

  categorias: CategoriaI[];

  ngOnInit(){
    this.categoriaService.ObtenerTodasLasCategorias().subscribe( data => {
      console.log(data)
      this.categorias = data.data

    }), error => { console.log('error categoria oninit',error)}
  }

  onEdit(id){}

  onDelete(id){}

}
