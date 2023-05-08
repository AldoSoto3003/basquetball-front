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
import { RegistraredicionesComponent } from './components/ediciones/registrarediciones/registrarediciones.component';
import { EditarEdicionesComponent } from './components/ediciones/editar-ediciones/editar-ediciones.component';
import { EdicionesComponent } from './components/ediciones/ediciones/ediciones.component';
import { RegistrarjugadoresComponent } from './components/Jugadores-equipos/registrarjugadores/registrarjugadores.component';
import { JugadoresComponent } from './components/Jugadores-equipos/jugadores/jugadores.component';
import { RegistrarequiposComponent } from './components/equipos/registrarequipos/registrarequipos.component';
import { EditarequipoComponent } from './components/equipos/editarequipo/editarequipo.component';
import { EquiposComponent } from './components/equipos/equipos-A/equipos.component';
import { CanchasPipe } from '../pipes/canchas.pipe';
import { EquiposPipe } from '../pipes/equipos.pipe';
import { EdicionesPipe } from '../pipes/ediciones.pipe';
import { EquipotorneoComponent } from './components/equiposTorneo/equipotorneo/equipotorneo.component';
import { EquipoTorneoRegistrarComponent } from './components/equiposTorneo/equipo-torneo-registrar/equipo-torneo-registrar.component';
import { LocalidadesComponent } from './components/Localidades/localidades/localidades.component';
import { RegistrarLocalidadesComponent } from './components/Localidades/registrar-localidades/registrar-localidades.component';
import { EditarLocalidadesComponent } from './components/Localidades/editar-localidades/editar-localidades.component';
import { LocalidadPipe } from '../pipes/localidad.pipe';
import { OptenerTercComponent } from './components/TorneoEdicionRamaCateoria/optenerterc/optener-terc.component';
import { ModificarTercComponent } from './components/TorneoEdicionRamaCateoria/modificar-terc/modificar-terc.component';
import { RegistrarTercComponent } from './components/TorneoEdicionRamaCateoria/registrar-terc/registrar-terc.component';
import { TorneocanchasComponent } from './components/TorneoCanchas/torneocanchas/torneocanchas.component';
import { RegistrartorneocanchasComponent } from './components/TorneoCanchas/registrartorneocanchas/registrartorneocanchas.component';
import { EditarTorneoCanchaComponent } from './components/TorneoCanchas/editar-torneo-cancha/editar-torneo-cancha.component';
import { TorneoComponent } from './components/Torneo/torneo/torneo.component';
import { RegistrarTorneoComponent } from './components/Torneo/registrar-torneo/registrar-torneo.component';
import { EditarTorneoComponent } from './components/Torneo/editar-torneo/editar-torneo.component';




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
    CanchasPipe,
    EquiposPipe,
    EdicionesPipe,
    LocalidadPipe,
    CanchasComponent,
    EditarCanchasComponent,
    RegistrarCanchasComponent,
    RegistraredicionesComponent,
    EditarEdicionesComponent,
    EdicionesComponent,
    RegistrarjugadoresComponent,
    JugadoresComponent,
    RegistrarequiposComponent,
    EditarequipoComponent,
    EquiposComponent,
    EquipotorneoComponent,
    EquipoTorneoRegistrarComponent,
    LocalidadesComponent,
    RegistrarLocalidadesComponent,
    EditarLocalidadesComponent,
    OptenerTercComponent,
    ModificarTercComponent,
    RegistrarTercComponent,
    TorneocanchasComponent,
    RegistrartorneocanchasComponent,
    EditarTorneoCanchaComponent,
    TorneoComponent,
    RegistrarTorneoComponent,
    EditarTorneoComponent,

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
