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
import { AdminComponent } from './admin/pages/admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path:"home",component: HomeComponent, children:[
    {path:"equipos", component:EquiposComponent},
    {path:"marcadores", component: MarcadoresComponent},
    {path:"posiciones", component: PosicionesComponent},
    {path:"login",component: LoginComponent },
  ]},

  { path:"admin", component: AdminComponent, canActivate:[AuthGuard], children:[
    //TODO: aqui iran las rutas hijas del admin
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
