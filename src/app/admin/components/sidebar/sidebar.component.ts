import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router:Router){}

  collapsed = true;
  navData = navbarData

}
