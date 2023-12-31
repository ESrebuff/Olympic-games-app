import { Injectable } from '@angular/core';
import { HttpErrorResponseInterface } from '../models/Error';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorHttp!: HttpErrorResponseInterface;

  setErrorHttp(errorHttp: HttpErrorResponseInterface) {
    this.errorHttp = errorHttp;
  }

  getErrorHttp() {
    return this.errorHttp;
  }
}