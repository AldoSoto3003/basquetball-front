import { Component, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ListaUsuariosI } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { RegistroUsuariosComponent } from '../registro-usuarios/registro-usuarios.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  
  constructor(private router:Router, private userService:UserService,private dialog:MatDialog){ }
  
  public search:string = '';
  usuarios !: ListaUsuariosI[];
  p: number = 1;
  subscription:Subscription;

  tienePermisoDeAgregar: boolean = true

  @ViewChildren(EditarUsuarioComponent)  
  editarUsuario: EditarUsuarioComponent;

  ngAfterViewInit(){
    const rol = localStorage.getItem("rol")
    if (rol == "3"){
      this.tienePermisoDeAgregar = false
    }
  }

  ngOnInit():void{
    this.userService.obtenerUsuarios().subscribe( data => {
      let dataResponse:any[] = data.data
      this.usuarios = dataResponse
    })

    this.actualizarCategorias();
  }

  actualizarCategorias(){
    this.subscription = this.userService.refresh.subscribe(() => {
      this.userService.obtenerUsuarios().subscribe(data => {
        this.usuarios = data.data
      })
    })
  }

  onSearch(busqueda:string){
    this.search = busqueda
  }
  
  openDialogEditar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(EditarUsuarioComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data:data
    });
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string,data:any=""): void {
    this.dialog.open(RegistroUsuariosComponent, {
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
    console.log(idUsuario)
    this.userService.EliminarUnUsuario(idUsuario).subscribe( data => {
      console.log(data)
      this.ngOnInit()
    })
  }

}
