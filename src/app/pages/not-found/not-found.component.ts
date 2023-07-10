import { Component } from '@angular/core';
import { HttpErrorResponseInterface } from 'src/app/core/models/Error';
import { ErrorHttpService } from 'src/app/core/services/errorHttp.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  error!: HttpErrorResponseInterface;

  constructor(private errorService: ErrorHttpService) {}

  ngOnInit() {
    this.error = this.errorService.getErrorHttp();
  }

}
