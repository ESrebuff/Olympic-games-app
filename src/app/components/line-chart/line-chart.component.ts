import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LineChart } from 'src/app/core/models/NgxChartData';
import { Olympic } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @Input() olympic!: Olympic | null;

  public chartData!: LineChart[];
  public view: [number, number] = [800, 430];
  public showXAxis: boolean = true;
  public showYAxis: boolean = true;
  public showXAxisLabel: boolean = true;
  public showYAxisLabel: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateChartData();
    this.updateViewSize();
  }

  private updateChartData(): void {
    if (this.olympic) {
      this.chartData = [
        {
          name: this.olympic.country,
          series: this.olympic.participations.map((participation) => ({
            name: participation.year.toString(),
            value: participation.medalsCount.toString(),
          })),
        },
      ];
    }
  }

  updateViewSize(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth * 0.8 <= 800) {
      this.view = [windowWidth * 0.8, 430];
    }
  }

  onResize(event: UIEvent) {
    const windowWidth = event.target as Window;
    if (windowWidth.innerWidth * 0.8 <= 430) {
      this.view = [windowWidth.innerWidth * 0.8, 430];
    }
  }
}
