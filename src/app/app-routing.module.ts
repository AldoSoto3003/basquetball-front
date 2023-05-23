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
import { EdicionesComponent } from './admin/components/ediciones/ediciones/ediciones.component';
import { JugadoresComponent } from './admin/components/Jugadores-equipos/jugadores/jugadores.component';
import { EquiposComponent } from './admin/components/equipos/equipos-A/equipos.component';
import { EquipoTorneoRegistrarComponent } from './admin/components/equiposTorneo/equipo-torneo-registrar/equipo-torneo-registrar.component';
import { LocalidadesComponent } from './admin/components/Localidades/localidades/localidades.component';
import { OptenerTercComponent } from './admin/components/TorneoEdicionRamaCateoria/optenerterc/optener-terc.component';

import { TorneocanchasComponent } from './admin/components/TorneoCanchas/torneocanchas/torneocanchas.component';
import { TorneoComponent } from './admin/components/Torneo/torneo/torneo.component';
import { TorneoalbitroComponent } from './admin/components/TorneoAlbitro/torneoalbitro/torneoalbitro.component';
import { OptenerTercejComponent } from './admin/components/TorneoEdiRamaCatEquipoJug/optenertercej/optener-tercej.component';
import { UsuariosGuard } from './guards/usuarios.guard';
import { TorneosGuard } from './guards/torneos.guard';
import { CanchasGuard } from './guards/canchas.guard';
import { CategoriasGuard } from './guards/categorias.guard';
import { EdicionesGuard } from './guards/ediciones.guard';
import { JugadorGuard } from './guards/jugador.guard';
import { EquipoGuard } from './guards/equipo.guard';
import { TorneoalbitroGuard } from './guards/torneoalbitro.guard';
import { TorneocanchaGuard } from './guards/torneocancha.guard';
import { TorEdicRamaCategoriaGuard } from './guards/tor-edic-rama-categoria.guard';
import { TorEdiRamaCatEquipoGuard } from './guards/tor-edi-rama-cat-equipo.guard';
import { EquipostorneoGuard } from './guards/equipostorneo.guard';
import { JugadoractivoComponent } from './admin/components/jugadoractivo/jugadoractivo.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path:"home",component: HomeComponent, children:[
    
    {path:"marcadores", component: MarcadoresComponent},
    {path:"posiciones", component: PosicionesComponent},
    {path:"login",component: LoginComponent },
  ]},

  { path:"admin", component: AdminComponent,canActivate:[AuthGuard],children:[
    {path:"usuarios", component: UsuariosComponent, canActivate:[UsuariosGuard]},
    {path:"canchas", component:CanchasComponent,canActivate:[CanchasGuard]},
    {path:'categorias',component:CategoriasComponent,canActivate:[CategoriasGuard]},
    {path:'ediciones',component:EdicionesComponent,canActivate:[EdicionesGuard]},
    {path:'jugadores',component:JugadoresComponent,canActivate:[JugadorGuard]},
    {path:'equipos-A',component:EquiposComponent,canActivate:[EquipoGuard]},
    {path:'equiposTorneo',component:EquipoTorneoRegistrarComponent,canActivate:[EquipostorneoGuard]},
    {path:'localidades',component:LocalidadesComponent},
    {path:'optenerterc',component:OptenerTercComponent,canActivate:[TorEdicRamaCategoriaGuard]},
    {path:'torneocanchas',component:TorneocanchasComponent,canActivate:[TorneocanchaGuard]},
    {path:'torneo',component:TorneoComponent,canActivate:[TorneosGuard]},
    {path:'torneoalbitro',component:TorneoalbitroComponent,canActivate:[TorneoalbitroGuard]},
    {path:'optenertercej',component:OptenerTercejComponent,canActivate:[TorEdiRamaCatEquipoGuard ]},
    {path:'jugadoractivo',component:JugadoractivoComponent}

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
