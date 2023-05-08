import { Component, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { equiposI } from 'src/app/models/equipos.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EquiposService } from 'src/app/services/equipos.service';
import { EditarequipoComponent } from '../editarequipo/editarequipo.component';
import { RegistrarequiposComponent } from '../registrarequipos/registrarequipos.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  ediciones: equiposI[]
  p:number = 1;
  public searchCategoria : string = ""
  @ViewChildren(EditarequipoComponent)
  editarEquipo:EditarequipoComponent;
  public search:string = '';
  
  constructor( private EquiposService:EquiposService,private alertService:AlertasService ,private dialog:MatDialog){}


  ngOnInit(){
    this.EquiposService.ObtenerEquipos().subscribe( data => {
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
    this.dialog.open(EditarequipoComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrarequiposComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }


  onDelete(id){

     this.EquiposService.EliminarEquipo(id).subscribe( data => {
       this.alertService.showSuccess('La categoria se elimino','Exito!')
     }), error => { this.alertService.showError('Error',error.error.data)}
  }



}
