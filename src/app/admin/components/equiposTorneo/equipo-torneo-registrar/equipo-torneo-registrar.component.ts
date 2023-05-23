import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EdicionesTorneoI } from 'src/app/models/Edicionestorneo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EquiposTorneoService } from 'src/app/services/equipos-torneo.service';
import { EquipotorneoComponent } from '../equipotorneo/equipotorneo.component';
import { edicionesI } from 'src/app/models/ediciones.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo-torneo-registrar',
  templateUrl: './equipo-torneo-registrar.component.html',
  styleUrls: ['./equipo-torneo-registrar.component.css']
})
export class EquipoTorneoRegistrarComponent {
  ediciones!: edicionesI[];
  p: number = 1;
  subscription:Subscription;
 

  public search:string = '';


 
  constructor(private router:Router, private EquiposTorneoService:EquiposTorneoService,private dialog:MatDialog){ }

  ngOnInit():void{
    this.EquiposTorneoService.ObtenerEdicionTorneo().subscribe( data => {
      let dataResponse:edicionesI[] = data.data
      this.ediciones = dataResponse
    })


    this.actualizarCategorias();
    }

    onSearch(busqueda:string){
      this.search = busqueda
    }


    openDialogEditar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
      this.dialog.open(EquipotorneoComponent, {
        width: 'auto',
        enterAnimationDuration,
        exitAnimationDuration,
        data:data
      });
    }

    actualizarCategorias(){
      this.subscription = this.EquiposTorneoService.refresh.subscribe(() => {
        this.EquiposTorneoService.ObtenerEdicionTorneo().subscribe(data => {
          this.ediciones = data.data
        })
      })
    }

    openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
      this.dialog.open(EquipotorneoComponent, {
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
