import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosicionesComponent } from './posiciones/posiciones.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquiposComponent } from '../admin/components/equipos/equipos-A/equipos.component';






@NgModule({
  declarations: [

    EquiposComponent,
    PosicionesComponent,
    MarcadoresComponent,
    RegistroUsuariosComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports: [
    PosicionesComponent,
    MarcadoresComponent,


  ]
})
export class ComponentsModule { }
