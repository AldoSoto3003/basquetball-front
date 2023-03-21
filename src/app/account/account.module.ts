import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquiposComponent } from './equipos/equipos.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
    EquiposComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AccountModule { }
