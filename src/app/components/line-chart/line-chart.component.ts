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
  public view: [number, number] = [700, 400];
  public showXAxis: boolean  = true;
  public showYAxis: boolean  = true;
  public showXAxisLabel: boolean  = true;
  public showYAxisLabel: boolean = true;
  public xAxisLabel:string = "Dates";

  ngOnInit(): void {
    this.updateChartData();
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

}
