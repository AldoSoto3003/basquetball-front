import { Component, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { CanchasI } from 'src/app/models/InformacionCanchas.model';
import { CanchasService } from 'src/app/services/canchas.service';
import { EditarCanchasComponent } from '../editar-canchas/editar-canchas.component';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarCanchasComponent } from '../registrar-canchas/registrar-canchas.component';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {
  canchas!: CanchasI[];
  p: number = 1;
 
  @ViewChildren(EditarCanchasComponent)
  editarCancha:EditarCanchasComponent;
  public search:string = '';


 
  constructor(private router:Router, private CanchasService:CanchasService,private dialog:MatDialog){ }

  ngOnInit():void{
    this.CanchasService.ObtenerTodasLasCanchas().subscribe( data => {
      let dataResponse:CanchasI[] = data.data
      this.canchas = dataResponse
    })
    }

    onSearch(busqueda:string){
      this.search = busqueda
    }


    openDialogEditar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
      this.dialog.open(EditarCanchasComponent, {
        width: 'auto',
        enterAnimationDuration,
        exitAnimationDuration,
        data:data
      });
    }

    openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
      this.dialog.open(RegistrarCanchasComponent, {
        width: 'auto',
        enterAnimationDuration,
        exitAnimationDuration,
        data:data
      });
    }

    onRegister(){
      this.openDialogRegistrar('0ms','0ms')
    }

    onEdit(user:any){
      this.openDialogEditar('0ms','0ms',user)
    }

   
    onDelete(idUsuario:any){
      // this.CanchasService.EliminarCancha(idUsuario).subscribe( data => {
      //   this.ngOnInit()
      // })
    }

}
