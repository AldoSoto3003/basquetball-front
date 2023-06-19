import { Component } from '@angular/core';
import { updatepassService } from 'src/app/services/changepassword';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private updatePassService: updatepassService) {}

  guardar() {
    if (this.newPassword === this.confirmNewPassword) {
      const form: ChangePassword = {
        PassID: this.currentPassword,
        PassNew: this.newPassword,
        PassAux: this.confirmNewPassword
      };

      this.updatePassService.Actualizar(form).subscribe(
        (response) => {
          Swal.fire(response.message, response.data, "success");
          console.log('Contraseña guardada con éxito');
        },
        (error) => {
          Swal.fire(error.error.message, error.error.data, "error");
          console.log('Ocurrió un error al guardar la contraseña');
        }
      );
    } 
  }
}

export interface ChangePassword {
  PassID: string;
  PassNew: string;
  PassAux: string;
}
