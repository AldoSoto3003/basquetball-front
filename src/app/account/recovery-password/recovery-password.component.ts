import { Component } from '@angular/core';
import { CorreoService } from 'src/app/services/correo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent {

  constructor(private correoService: CorreoService) {}

  showText = true;
  email: string = '';

  toggleText() {
    console.log('Valor del correo electrónico:', this.email); 
    if (this.email) {
      const form = { email: this.email };

      this.correoService.EnviarCorreo(form).subscribe(
        (response) => {
          console.log('Correo enviado con éxito');
          console.log('Respuesta de la API:', response);
          Swal.fire(response.message, response.data, "success").then(function(){
            window.location.href="/home/login"
          })
        },
        (error) => {
          console.log('Error al enviar el correo');
          Swal.fire(error.error.message, error.error.data, "error");
          
        }
      );
      }
    this.showText = !this.showText;
  }
}
