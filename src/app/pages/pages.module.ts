import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterLink, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    RouterOutlet
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
