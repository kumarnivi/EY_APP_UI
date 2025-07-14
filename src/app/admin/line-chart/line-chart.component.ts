import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  ngOnInit(): void {
   
  }
  

  public ngAfterViewInit(): void {
    this.createChartLine();
  }
  
  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [50, 48, 45, 40, 30, 26, 10];
  
    
    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'spline',
        backgroundColor: '#f4f4f7',
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: undefined,
        tickInterval: 10, 
        max: 60, // Set the maximum value on the y-axis
      },
      xAxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'july'], // Replace with your desired month labels
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key:%B}</div>`, // Display the month name in the tooltip
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Amount',
          data,
          color:'red',
          marker: {
            enabled: false, // Disable markers for data points
          },
          
        },
      
      ],
    } as any);
  }
  

    

}
