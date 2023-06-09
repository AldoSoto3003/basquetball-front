import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { Error500Component } from './components/error500/error500.component';
import { ErrorComponent } from './components/error/error.component';
import { MatIconModule } from '@angular/material/icon';

import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminModule } from './admin/admin.module';
import { UpdatepasswordComponent } from './account/updatepassword/updatepassword.component';

import { FormsModule } from '@angular/forms';
import { updatepassService } from './services/changepassword';
import { MatDialogModule } from '@angular/material/dialog';
import { PaginationService } from 'ngx-pagination';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    Error500Component,
    ErrorComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    AccountModule,
    PagesModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
   

    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
    
  ],
 providers: [
  JwtHelperService,
  PaginationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, 
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
