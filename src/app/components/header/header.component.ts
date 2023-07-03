import { Component, Input } from '@angular/core';
import { HeaderData } from 'src/app/core/models/HeaderData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() headerData!: HeaderData[];
}
