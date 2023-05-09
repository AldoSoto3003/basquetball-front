import { Component, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TorneoAlbitroI } from 'src/app/models/torneoalbitro.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoAlbitroService } from 'src/app/services/torneo-albitro.service';
import { EditartorneoalbitroComponent } from '../editartorneoalbitro/editartorneoalbitro.component';
import { RegistrartorneoalbitroComponent } from '../registrartorneoalbitro/registrartorneoalbitro.component';

@Component({
  selector: 'app-torneoalbitro',
  templateUrl: './torneoalbitro.component.html',
  styleUrls: ['./torneoalbitro.component.css']
})
export class TorneoalbitroComponent {
  constructor( private TorneoAlbitroService:TorneoAlbitroService,private alertService:AlertasService ,private dialog:MatDialog){}
 
  ediciones: TorneoAlbitroI[]
  p:number = 1;
  public searchCategoria : string = ""

  @ViewChildren(EditartorneoalbitroComponent)
  editarCancha:EditartorneoalbitroComponent;
  public search:string = '';

  ngOnInit(){
    this.TorneoAlbitroService.ObtenerTorneoArbitro().subscribe( data => {
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
    this.dialog.open(EditartorneoalbitroComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrartorneoalbitroComponent, {
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
