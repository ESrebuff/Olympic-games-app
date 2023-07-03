import { Component, Input, OnInit } from '@angular/core';
import { HeaderData } from 'src/app/core/models/HeaderData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() headerData!: HeaderData[];

  ngOnInit(): void {
  }

}
