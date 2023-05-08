import { Component, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TorneoI } from 'src/app/models/torneo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoService } from 'src/app/services/torneo.service';
import { EditarTorneoComponent } from '../editar-torneo/editar-torneo.component';
import { RegistrarTorneoComponent } from '../registrar-torneo/registrar-torneo.component';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent {
   constructor( private TorneoService:TorneoService,private alertService:AlertasService ,private dialog:MatDialog){}
 
  ediciones: TorneoI[]
  p:number = 1;
  public searchCategoria : string = ""

  @ViewChildren(EditarTorneoComponent)
  editarCancha:EditarTorneoComponent;
  public search:string = '';

  ngOnInit(){
    this.TorneoService.obtenerTorneos().subscribe( data => {
      console.log(data)
      this.ediciones = data.data
    }), error => { console.log('error categoria oninit',error)}
  }

  onSearch(busqueda:string){
    this.search = busqueda
  }
  onRegister(){
    this.openDialogRegistrar('0ms','0ms')
  }

  onEdit(user:any){
    this.openDialogEditar('0ms','0ms',user)
  }

  openDialogEditar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(EditarTorneoComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrarTorneoComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  onDelete(id){
     this.TorneoService.EliminarTorneo(id).subscribe( data => {
       this.alertService.showSuccess('La categoria se elimino','Exito!')
     }), error => { this.alertService.showError('Error',error.error.data)}
  }

}
