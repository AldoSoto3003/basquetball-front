import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LoginComponent } from './account/login/login.component';
import { LoginPruebasComponent } from './account/login-pruebas/login-pruebas.component';
import { HomeComponent } from './pages/home/home.component';
import { MarcadoresComponent } from './components/marcadores/marcadores.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent },
  { path:"equipos", component: EquiposComponent},
  { path:"marcadores", component: MarcadoresComponent},
  { path:"posiciones", component: PosicionesComponent},
  { path: 'login',component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
