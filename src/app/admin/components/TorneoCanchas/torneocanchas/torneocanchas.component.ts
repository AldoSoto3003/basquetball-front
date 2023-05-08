import { Component, ViewChildren } from '@angular/core';
import { RegistrartorneocanchasComponent } from '../registrartorneocanchas/registrartorneocanchas.component';
import { EditarTorneoCanchaComponent } from '../editar-torneo-cancha/editar-torneo-cancha.component';
import { TorneoCanchaService } from 'src/app/services/torneo-cancha.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { MatDialog } from '@angular/material/dialog';
import { TorneoCanchaI } from 'src/app/models/TorneoCancha.interface';

@Component({
  selector: 'app-torneocanchas',
  templateUrl: './torneocanchas.component.html',
  styleUrls: ['./torneocanchas.component.css']
})
export class TorneocanchasComponent {

  constructor( private TorneoCanchaService:TorneoCanchaService,private alertService:AlertasService ,private dialog:MatDialog){}
 
  ediciones: TorneoCanchaI[]
  p:number = 1;
  public searchCategoria : string = ""

  @ViewChildren(EditarTorneoCanchaComponent)
  editarCancha:EditarTorneoCanchaComponent;
  public search:string = '';

  ngOnInit(){
    this.TorneoCanchaService.ObtenerTorneoCanchas().subscribe( data => {
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
    this.dialog.open(EditarTorneoCanchaComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrartorneocanchasComponent, {
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
