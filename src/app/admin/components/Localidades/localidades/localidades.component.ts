import { Component, ViewChildren } from '@angular/core';
import { LocalidadesI } from 'src/app/models/localidades.interface';
import { EditarLocalidadesComponent } from '../editar-localidades/editar-localidades.component';
import { LocalidadesService } from 'src/app/services/localidades.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistrarLocalidadesComponent } from '../registrar-localidades/registrar-localidades.component';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent {
  localidades!: LocalidadesI[];
  p: number = 1;

  @ViewChildren(EditarLocalidadesComponent)
  editarCancha:EditarLocalidadesComponent;
  public search:string = '';



  constructor(private router:Router, private LocalidadesService:LocalidadesService,private dialog:MatDialog){ }

  ngOnInit():void{
    this.LocalidadesService.ObtenerLocalidades().subscribe( data => {
      let dataResponse:LocalidadesI[] = data.data
      this.localidades = dataResponse
    })
    }

    onSearch(busqueda:string){
      this.search = busqueda
    }


    openDialogEditar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
     const dialogRef= this.dialog.open(EditarLocalidadesComponent, {
        width: 'auto',
        enterAnimationDuration,
        exitAnimationDuration,
        data:data
      });
    }

    openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    const dialogRef=  this.dialog.open(RegistrarLocalidadesComponent, {
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
