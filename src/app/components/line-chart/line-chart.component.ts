import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Olympic } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  @Input() olympic!: Olympic | null;

  constructor(private router: Router) {}

  public chartData!: any[];
  public view: [number, number] = [800, 430];
  public showXAxis: boolean  = true;
  public showYAxis: boolean  = true;
  public showXAxisLabel: boolean  = true;
  public showYAxisLabel: boolean = true;

  ngOnInit(): void {
    this.updateChartData();
    this.updateViewSize();
  }

  private updateChartData(): void {
    if (this.olympic) {
      this.chartData = [{
        name: this.olympic.country,
        series: this.olympic.participations.map(participation => ({
          name: participation.year.toString(),
          value: participation.medalsCount.toString()
        }))
      }]
    }
  }

  private updateViewSize(): void {
    const windowWidth = window.innerWidth;
    console.log(windowWidth * 0.8);
    if (windowWidth * 0.8 <= 800) {
      this.view = [windowWidth * 0.8, 430];
    }
  }

}
