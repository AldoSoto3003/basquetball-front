import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LoginComponent } from './account/login/login.component';
import { LoginPruebasComponent } from './account/login-pruebas/login-pruebas.component';
import { HomeComponent } from './pages/home/home.component';
import { MarcadoresComponent } from './components/marcadores/marcadores.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { ErrorComponent } from './components/error/error.component';
import { Error500Component } from './components/error500/error500.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:"home",component: HomeComponent, canActivate:[AuthGuard] },
  { path:"equipos", component: EquiposComponent, canActivate:[AuthGuard] },
  { path:"marcadores", component: MarcadoresComponent},
  { path:"posiciones", component: PosicionesComponent},
  { path: "registroUsuario", component: RegistroUsuariosComponent},
  { path:"login",component: LoginComponent },
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
