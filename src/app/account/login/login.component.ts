import { Component, Injectable, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/Usuario.model';
import { ErrorHandlerService } from 'src/app/services/errorHandling.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { MatDialog } from '@angular/material/dialog';
import { CrudadmintorneoComponent } from '../crudadmintorneo/crudadmintorneo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {

  datosUsuario: Usuario;
  visible = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  @ViewChildren(CrudadmintorneoComponent)
  crearadmintorneo: CrudadmintorneoComponent;

  constructor(private api: AuthService, private router: Router, private _snackBar: MatSnackBar, private errorService: ErrorHandlerService, private alertService: AlertasService, private dialog: MatDialog) { }

  async onLogin(form) {
    if (form.valid) {
      this.api.loginByEmail(form.value).subscribe(data => {
        let dataResponse = data;
        if (dataResponse.Token) {
          localStorage.setItem("Token", dataResponse.Token)
          this.api.loggedIn = true;

          this.api.authme().subscribe(response => {
            localStorage.setItem("informacion_usuario", JSON.stringify(response.data));
            localStorage.setItem("nombre", response.data.Nombres);
            localStorage.setItem("apellido", response.data.ApellidoPaterno);
            this.router.navigate(['admin'])
          }, error => this.alertService.showError("Error", error.error.data))
        }

      }, error => this.alertService.showError("Error", error.error.data))
    } else { this.alertService.showError("Error", "formulario invalido") }
  }

  showModal(error) {
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: error,
      background: "#f2eee3",
    })
  }

  onRegister() {
    this.openDialogRegistrar('0ms', '0ms')
  }

  openDialogRegistrar(enterAnimationDuration: string, exitAnimationDuration: string, data: any = ""): void {
    this.dialog.open(CrudadmintorneoComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  }
}
