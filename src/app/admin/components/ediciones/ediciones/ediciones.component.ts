import { Component, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { edicionesI } from 'src/app/models/ediciones.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { EdicionesService } from 'src/app/services/ediciones.service';
import { EditarEdicionesComponent } from '../editar-ediciones/editar-ediciones.component';
import { RegistraredicionesComponent } from '../registrarediciones/registrarediciones.component';


@Component({
  selector: 'app-ediciones',
  templateUrl: './ediciones.component.html',
  styleUrls: ['./ediciones.component.css']
})
export class EdicionesComponent {

  constructor( private edicionesserver:EdicionesService,private alertService:AlertasService ,private dialog:MatDialog){}
 
  ediciones: edicionesI[]
  p:number = 1;
  public searchCategoria : string = ""

  @ViewChildren(EditarEdicionesComponent)
  editarCancha:EditarEdicionesComponent;
  public search:string = '';

  ngOnInit(){
    this.edicionesserver.ObtenerTodasLasEdiciones().subscribe( data => {
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
    this.dialog.open(EditarEdicionesComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistraredicionesComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  onDelete(id){
    // this.categoriaService.EliminarUnaCategoria(id).subscribe( data => {
    //   this.alertService.showSuccess('La categoria se elimino','Exito!')
    // }), error => { this.alertService.showError('Error',error.error.data)}
  }

}
