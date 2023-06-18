import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { TerceI } from 'src/app/models/terce.interface';
import { CategoriaI } from 'src/app/models/categoria.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TerceService } from 'src/app/services/terce.service';

@Component({
  selector: 'app-terce',
  templateUrl: './terce.component.html',
  styleUrls: ['./terce.component.css']
})
export class TerceComponent {

  constructor(private terceService:TerceService, private alertService:AlertasService ,private dialog:MatDialog){}

  subscription:Subscription;
  terce: TerceI[];
  p:number = 1;
  public searchCategoria : string = ""

  ngOnInit(){  }

  actualizarTerce(){
    this.subscription = this.terceService.refresh.subscribe(() => {
      this.terceService.ObtenerTerce("todo").subscribe(data => {
        this.terce = data.data
      })
    })
  }

  onSearch(busqueda:string){
    this.searchCategoria = busqueda
  }

  onRegister(){
    // this.openDialogRegistrar('0ms','0ms')
  }

  onEdit(user:any){
    // this.openDialogEditar('0ms','0ms',user)
  }

  // openDialogEditar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
  //   this.dialog.open(EditarCategoriaComponent, {
  //     width: 'auto',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //     data:data
  //   });
  // }

  // openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
  //   this.dialog.open(RegistrarCategoriaComponent, {
  //     width: 'auto',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //     data:data
  //   });
  // }

}
