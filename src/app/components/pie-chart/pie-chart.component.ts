import { Component, Input, OnInit } from '@angular/core';
import { Olympic } from 'src/app/core/models/Olympic';

interface ChartData {
  name: string;
  value: number;
  extra: {
    id: number;
  };
}
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() olympics!: Olympic[] | null;

  public chartData: ChartData[] = [];

  public view: [number, number] = [700, 400];

  public animations: boolean = true;

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.updateChartData();
  }

  private updateChartData(): void {
    if (this.olympics) {
      this.chartData = this.olympics.map((item) => ({
        name: item.country,
        value: item.participations.reduce((total, participation) => total + participation.medalsCount, 0),
        extra: {
          id: item.id,
        },
      }));
    }
  }

  onSelect(event: Event): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(event)).extra.id);

  }
}
