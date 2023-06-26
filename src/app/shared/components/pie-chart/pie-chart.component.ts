import { Component, Input } from '@angular/core';
import { Olympic } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  @Input() olympics!: Olympic[]; 
  /*
    TODO : Passer les données
    Typer le doc
    Faire un event lors du clique sur un des éléments
  */

    data: any[] = [
      {
        name: 'Germany',
        value: 40632,
        extra: {
          code: 'de',
        },
      },
      {
        name: 'United States',
        value: 50000,
        extra: {
          code: 'us',
        },
      },
      {
        name: 'France',
        value: 36745,
        extra: {
          code: 'fr',
        },
      },
      {
        name: 'United Kingdom',
        value: 36240,
        extra: {
          code: 'uk',
        },
      },
      {
        name: 'Spain',
        value: 33000,
        extra: {
          code: 'es',
        },
      },
      {
        name: 'Italy',
        value: 35800,
        extra: {
          code: 'it',
        },
      },
    ];
    view: [number, number] = [700, 400];
  
    animations: boolean = true;
  
    onSelect(event: Event): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(event)));
    }
  
    onActivate(event: Event): void {
      console.log('Activate', JSON.parse(JSON.stringify(event)));
  
    }
  
    onDeactivate(event: Event): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(event)));
    }

}
