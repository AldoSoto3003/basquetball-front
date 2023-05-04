import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MarcadoresComponent } from './components/marcadores/marcadores.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { ErrorComponent } from './components/error/error.component';
import { Error500Component } from './components/error500/error500.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/pages/admin/admin.component';

import { RegistroUsuariosComponent } from './admin/components/usuarios/registro-usuarios/registro-usuarios.component'
import { Usuario } from './models/Usuario.model';
import { UsuariosComponent } from './admin/components/usuarios/usuarios/usuarios.component';
import { EditarUsuarioComponent } from './admin/components/usuarios/editar-usuario/editar-usuario.component';
import { CategoriaService } from './services/categorias.service';
import { CategoriasComponent } from './admin/components/categorias/categoria/categorias.component';
import { CanchasComponent } from './admin/components/canchas/canchas/canchas.component';
import { JugadoresComponent } from './admin/components/Jugadores-equipos/jugadores/jugadores.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path:"home",component: HomeComponent, children:[
    
    {path:"marcadores", component: MarcadoresComponent},
    {path:"posiciones", component: PosicionesComponent},
    {path:"login",component: LoginComponent },
  ]},

  { path:"admin", component: AdminComponent,canActivate:[AuthGuard],children:[
    {path:"usuarios", component: UsuariosComponent},
    {path:"canchas", component:CanchasComponent},
    {path:'categorias',component:CategoriasComponent},
    {path: 'JugadoresEquipo',component:JugadoresComponent},
    
  ] },
  
  { path:"error404",component:ErrorComponent },
  { path:"error500",component:Error500Component },
  { path:"**", redirectTo: 'error404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
