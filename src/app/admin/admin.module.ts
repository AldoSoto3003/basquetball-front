import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';

import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { CanchasComponent } from './components/canchas/canchas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    RegistroUsuariosComponent,
    CanchasComponent
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
    MatFormFieldModule
  ],
  exports:[
    RegistroUsuariosComponent
  ]
})
export class AdminModule { }
