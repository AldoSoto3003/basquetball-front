import { Component, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { torneoeEdiRamaCatEquipoI } from 'src/app/models/torneoeEdiRamaCatEquipo.interface';
import { AlertasService } from 'src/app/services/alertas.service';
import { TorneoEdiRamaCatEquipoService } from 'src/app/services/torneo-edi-rama-cat-equipo.service';
import { ModificarTercejComponent } from '../modificar-tercej/modificar-tercej.component';
import { RegistrarTercejComponent } from '../registrar-tercej/registrar-tercej.component';

@Component({
  selector: 'app-optener-tercej',
  templateUrl: './optener-tercej.component.html',
  styleUrls: ['./optener-tercej.component.css']
})
export class OptenerTercejComponent {

  constructor( private TorneoEdiRamaCatEquipoService:TorneoEdiRamaCatEquipoService,private alertService:AlertasService ,private dialog:MatDialog){}
 
  ediciones: torneoeEdiRamaCatEquipoI[]
  p:number = 1;
  public searchCategoria : string = ""

  @ViewChildren(ModificarTercejComponent)
  editarCancha:ModificarTercejComponent;
  public search:string = '';

  ngOnInit(){
    this.TorneoEdiRamaCatEquipoService.ObtenerTERCEJ().subscribe( data => {
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
    this.dialog.open(ModificarTercejComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistrarTercejComponent, {
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
