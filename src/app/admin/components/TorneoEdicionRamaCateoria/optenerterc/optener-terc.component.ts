import { Component, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TorneoEdicionRamaCategoriaI } from 'src/app/models/TorneoEdicionRamaCategoria.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoEdicionRamaCategoriaService } from 'src/app/services/torneo-edicion-rama-categoria.service';
import { ModificarTercComponent } from '../modificar-terc/modificar-terc.component';
import { RegistrarTercComponent } from '../registrar-terc/registrar-terc.component';

@Component({
  selector: 'app-optener-terc',
  templateUrl: './optener-terc.component.html',
  styleUrls: ['./optener-terc.component.css']
})
export class OptenerTercComponent {
  constructor( private TorneoEdicionRamaCategoriaService:TorneoEdicionRamaCategoriaService,private alertService:AlertasService ,private dialog:MatDialog){}
 
  ediciones: TorneoEdicionRamaCategoriaI[]
  p:number = 1;
  public searchCategoria : string = ""

  @ViewChildren(ModificarTercComponent)
  editarCancha:ModificarTercComponent;
  public search:string = '';

  ngOnInit(){
    this.TorneoEdicionRamaCategoriaService.ObtenerTorneoEdicionRamaCategoria().subscribe( data => {
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
    this.dialog.open(ModificarTercComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrarTercComponent, {
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
