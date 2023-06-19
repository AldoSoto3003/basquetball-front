import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosicionesComponent } from './posiciones/posiciones.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { ChangepasswordComponent } from './changepassword/changepassword.component';




@NgModule({
  declarations: [
    PosicionesComponent,
    MarcadoresComponent,
    RegistroUsuariosComponent,
    ChangepasswordComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    
  
  ],
  exports:[
    PosicionesComponent,
    MarcadoresComponent,
   
  
  ]
})
export class ComponentsModule { }
