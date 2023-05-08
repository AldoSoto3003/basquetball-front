import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor( private toast:ToastrService) { }

  showSuccess(titulo,texto){
    this.toast.success(texto,titulo,{
      positionClass:'toast-bottom-center',
      tapToDismiss: true
    });
  }

  showError(titulo,texto){
    this.toast.error(texto,titulo,{
      positionClass:'toast-bottom-center',
      tapToDismiss: true
    });
  }
}
