import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  showLabels: boolean = true;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        onClick: (event, legendItem) => {
          console.log(legendItem.text);
        },
      },
      
      datalabels: {
        display: false,
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    // TODO y mettre les pays
    labels: [
      'Italy',
      'Spain',
      'ited Kingdom',
      'Germany',
      'United Sta',
      'France',
    ],
    datasets: [
      {
        // TODO y mettre le nombre de médailles dans le même ordre que les pays
        data: [300, 200, 350, 240, 270, 45],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
