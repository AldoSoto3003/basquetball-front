import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './account/equipos/equipos.component';
import { LoginComponent } from './account/login/login.component';
import { LoginPruebasComponent } from './account/login-pruebas/login-pruebas.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent },
  { path:"equipos", component: EquiposComponent},
  { path: 'login',component: LoginPruebasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
