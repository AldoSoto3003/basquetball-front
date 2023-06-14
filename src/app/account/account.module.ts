import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AccountModule { }
