import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';
import { RegistroUsuariosComponent } from './components/usuarios/registro-usuarios/registro-usuarios.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './components/usuarios/editar-usuario/editar-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { NgbAlertModule, NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasComponent } from './components/categorias/categoria/categorias.component';
import { RegistrarCategoriaComponent } from './components/categorias/registrar-categoria/registrar-categoria.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuariosPipe } from '../pipes/usuarios.pipe';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { CategoriasPipe } from '../pipes/categorias.pipe';
import { CanchasComponent } from './components/canchas/canchas/canchas.component';
import { EditarCanchasComponent } from './components/canchas/editar-canchas/editar-canchas.component';
import { RegistrarCanchasComponent } from './components/canchas/registrar-canchas/registrar-canchas.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    RegistroUsuariosComponent,
    EditarUsuarioComponent,
    UsuariosComponent,
    CategoriasComponent,
    RegistrarCategoriaComponent,
    EditarCategoriaComponent,
    
    
    UsuariosPipe,
    CategoriasPipe,
    CanchasComponent,
    EditarCanchasComponent,
    RegistrarCanchasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    

    OverlayModule,
    CdkMenuModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    
    NgbDatepickerModule,
    NgbDatepicker,
    NgbAlertModule,
    JsonPipe,
    NgxPaginationModule,
  ],
  exports:[
    UsuariosComponent
  ]
})
export class AdminModule { }
