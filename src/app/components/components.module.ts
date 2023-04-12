import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos/equipos.component';
import { PosicionesComponent } from './posiciones/posiciones.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




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
  exports:[
    EquiposComponent,
    PosicionesComponent,
    MarcadoresComponent,
   
  
  ]
})
export class ComponentsModule { }
