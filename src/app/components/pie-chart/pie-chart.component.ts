import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Olympic } from 'src/app/core/models/Olympic';

interface ChartData {
  name: string;
  value: number;
  extra: {
    id: number;
  };
};
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() olympics!: Olympic[] | null;

  constructor(private router: Router) {}

  public chartData: ChartData[] = [];

  public view: [number, number] = [650, 650];

  public animations: boolean = true;

  ngOnInit(): void {
    this.updateChartData();
    this.updateViewSize();
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
    this.router.navigateByUrl(`${JSON.parse(JSON.stringify(event)).extra.id}`);
  }

  private updateViewSize(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth * 0.8 <= 650) {
      this.view = [windowWidth * 0.8, 650];
    }
  }
}
