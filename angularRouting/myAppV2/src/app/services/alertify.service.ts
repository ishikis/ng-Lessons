import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }


  success(msg) {
    alertify.success(msg);
  }

  error(msg) {
    alertify.error(msg);
  }

  warning(msg) {
    alertify.warning(msg);
  }

  message(msg) {
    alertify.message(msg);
  }
}
