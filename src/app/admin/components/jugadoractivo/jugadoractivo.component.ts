import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JugadorA } from 'src/app/models/jugadoractivo.interface';
import { JugadoractivoService } from 'src/app/services/jugadoractivo.service';

@Component({
  selector: 'app-jugadoractivo',
  templateUrl: './jugadoractivo.component.html',
  styleUrls: ['./jugadoractivo.component.css']
})
export class JugadoractivoComponent {
  localidades!: JugadorA[];
  p: number = 1;
 

  public search:string = '';


 
  constructor(private router:Router, private JugadoractivoService:JugadoractivoService,private dialog:MatDialog){ }

  ngOnInit():void{
    this.JugadoractivoService.ObtenerJugadoresActivos('1').subscribe( data => {
      let dataResponse:JugadorA[] = data.data
      this.localidades = dataResponse
    })
    }

    onSearch(busqueda:string){
      this.search = busqueda
    }

}
