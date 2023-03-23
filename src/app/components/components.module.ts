import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos/equipos.component';
import { PosicionesComponent } from './posiciones/posiciones.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';




@NgModule({
  declarations: [
    EquiposComponent,
    PosicionesComponent,
    MarcadoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EquiposComponent,
    PosicionesComponent,
    MarcadoresComponent
  ]
})
export class ComponentsModule { }
