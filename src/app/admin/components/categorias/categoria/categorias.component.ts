import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { CategoriaService } from 'src/app/services/categorias.service';
import { RegistrarCategoriaComponent } from '../registrar-categoria/registrar-categoria.component';
import { EditarCategoriaComponent } from '../editar-categoria/editar-categoria.component';
import { AlertasService } from 'src/app/services/alertas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  constructor( private categoriaService:CategoriaService,private alertService:AlertasService ,private dialog:MatDialog){}

  subscription:Subscription;
  categorias: CategoriaI[];
  p:number = 1;
  public searchCategoria : string = ""

  ngOnInit(){
    this.categoriaService.ObtenerTodasLasCategorias().subscribe( data => {
      console.log(data)
      this.categorias = data.data
    }), error => { console.log('error categoria oninit',error)}

    this.actualizarCategorias();
  }

  actualizarCategorias(){
    this.subscription = this.categoriaService.refresh.subscribe(() => {
      this.categoriaService.ObtenerTodasLasCategorias().subscribe(data => {
        this.categorias = data.data
      })
    })
  }

  onSearch(busqueda:string){
    this.searchCategoria = busqueda
  }

  onRegister(){
    this.openDialogRegistrar('0ms','0ms')
  }

  onEdit(user:any){
    this.openDialogEditar('0ms','0ms',user)
  }

  onDelete(id){
    this.categoriaService.EliminarUnaCategoria(id).subscribe( data => {
      this.alertService.showSuccess('La categoria se elimino','Exito!')
    }), error => { this.alertService.showError('Error',error.error.data)}
  }

  openDialogEditar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(EditarCategoriaComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrarCategoriaComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }



}
