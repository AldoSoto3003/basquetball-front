import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/errorHandling.service';
import Swal from 'sweetalert2';
import { InformacionCanchas } from 'src/app/models/InformacionCanchas.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent  implements OnInit{
  contactFrom:FormGroup;
  datosCancha:InformacionCanchas
  public imagePath: any;
  imgURL: any="../../../assets/img/chivas.jpg";
  reader = new FileReader();
  public message: string;
  
   //Inyeccion de Dependencias
   constructor(private fb: FormBuilder, private userService: UserService,private errorService:ErrorHandlerService) {
    
   }
   ngOnInit(): void {
     this.createForm();
     this.ObtenerTodasLasCanchas();
    
  
   }
    
   async ObtenerTodasLasCanchas(){
    let datos=  await this.userService.ObtenerTodasLasCanchas().toPromise();
    this.setDatos(datos?.data);
   }
 
   setDatos(data:any){
     this.contactFrom.controls["Nombre"].setValue(data.NombreCancha);
     this.contactFrom.controls["Descripcion"].setValue(data.Descripcion);
     this.contactFrom.controls["urlImagen"].setValue(data.urlImagen);
     this.contactFrom.controls["Colonia"].setValue(data.Domicilio);
     this.contactFrom.controls["ID_Asentamiento"].setValue(data.id_asenta_cpcons);
     this.contactFrom.controls["CP"].setValue(data.cp);
     this.contactFrom.controls["Estatus"].setValue(data.Estatus);
   }

   OnSubmit(){
   if(this.contactFrom.valid)
     this.ModificarDatos();
  }
 
  ModificarDatos(){
   this.userService.ActualizarCancha({
    NombreCancha:this.contactFrom.controls["Nombre"].value,
    Descripcion:this.contactFrom.controls["Descripcion"].value,
    Domicilio:this.contactFrom.controls["Colonia"].value,
    id_asentamiento:   this.contactFrom.controls["ID_Asentamiento"].value,
    cp:   this.contactFrom.controls["CP"].value,
    Estatus:this.contactFrom.controls["Estatus"].value,
    urlImagen:   this.contactFrom.controls["urlImagen"].value,
     imagen:this.reader.result,
 

   }).subscribe(x=>Swal.fire(x.message,x.data.toString(),"success").then(function(){
     window.location.reload();
   }),error=>Swal.fire(error.error.message,error.error.data,"error"))
  }


  createForm(){
   this.contactFrom=this.fb.group({
    nombre: ['', Validators.required],
     Direccion: ['', Validators.required],
     Descripcion:['',[Validators.required]],
     CP: ['', [Validators.required]],
     Estatus:['',[Validators.required]],
     urlImagen: ['', ],
     ID_Asentamiento:['',Validators.required],
    });
  }
 
  LimpiarCampos(){
   this.contactFrom.reset();
  }
 
 preview(files: any) {
   if (files.length === 0) return;
   //Si el archivo tiene longitud verificaremos su MIME  y en caso de que no sea imagen termimos el proceso
   var mimeType = files[0].type;
   if (mimeType.match(/image\/*/) == null) {
     this.message = 'Solo Soportamos Imagenes.';
     return;
   }
 
   //Instanciamos el lector de archivos
   
   this.imagePath = files;
   this.reader.readAsDataURL(files[0]);
   
   this.reader.onloadend = (_event) => {
     this.imgURL = this.reader.result;
        
   };
  
 }

}

