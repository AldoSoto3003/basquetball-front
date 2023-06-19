import { Component } from '@angular/core';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  showText: boolean = true;
  newPassword: string = '';
  confirmPassword: string = '';

  guardar() {
    if (this.newPassword === this.confirmPassword) {
      console.log('Contraseña guardada con éxito');
    } else {
      console.log('Las contraseñas no coinciden. Por favor, inténtalo de nuevo');
    }
  }
}
