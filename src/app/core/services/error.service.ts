import { Injectable } from '@angular/core';
import { HttpErrorResponseInterface } from '../models/Error';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorHttp!: HttpErrorResponseInterface;

  setErrorHttp(errorHttp: HttpErrorResponseInterface): void {
    this.errorHttp = errorHttp;
  }

  getErrorHttp(): HttpErrorResponseInterface {
    return this.errorHttp;
  }
}
