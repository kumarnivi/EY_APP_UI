import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  public ngAfterViewInit(): void {
    this.createChartColumn();
  
  }

 

 
  private createChartColumn(): void {
    const data1: any[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,60];
    const data2: any[] = [10, 20, 40, 50, 60, 15, 25, 35, 45, 55, 5, 55];
    const data3: any[] = [12, 29, 32, 45, 59, 54, 24,15,45, 55,32, 14];

    const chart = Highcharts.chart(
      'chart-column' as any,
      {
        chart: {
          type: 'column',
          backgroundColor: '#f4f4f7',
        },
        title: {
          text: undefined, // Change the title
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false, // Enable the legend to distinguish between series
        },
        yAxis: {
          min: 0,
          title: undefined,
          tickInterval: 10, // Set the tick interval to 10
          max: 60, // Set the maximum value on the y-axis
        },
        xAxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'july', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // Replace with your desired month labels
        },
        tooltip: {
          headerFormat: `<div>Date: {point.key}</div>`,
          pointFormat: `<div>{series.name}: {point.y}</div>`,
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: false,
            },
          },
        },
        series: [
          {
            name: 'Amount 1',
            data: data1,
            color: '#EF469B',
          },
          {
            name: 'Amount 2',
            data: data2,
            color:'#6668EA'
          },
          {
            name: 'Amount 3',
            data: data3,
            color: '#f188ea',
          },
        ],
      } as any
    );
  }
  
 

























//   chartOptions = {
// 		animationEnabled: true,
// 		theme: "light2",
// 		title: {
// 			text: "Leave Trend"
// 		},
// 		axisX: {
// 			valueFormatString: "MMM",
// 			intervalType: "month",
// 			interval: 1
// 		},
// 		axisY: {
// 			title: "days",
	
// 		},
// 		toolTip: {
// 			shared: false
// 		},
// 		legend: {
// 			cursor: "pointer",
// 			itemclick: function(e: any){
// 				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// 					e.dataSeries.visible = false;
// 				} else{
// 					e.dataSeries.visible = true;
// 				}
// 				e.chart.render();
// 			}
// 		},
// 		data: [{
// 			type:"line",
// 			name: "Minimum",
// 			showInLegend: true,
// 			yValueFormatString: "",
// 			dataPoints: [		
// 				{ x: new Date(2021, 0, 1), y: 27 },
// 				{ x: new Date(2021, 1, 1), y: 28 },
// 				{ x: new Date(2021, 2, 1), y: 35 },
// 				{ x: new Date(2021, 3, 1), y: 45 },
// 				{ x: new Date(2021, 4, 1), y: 54 },
// 				{ x: new Date(2021, 5, 1), y: 64 },
// 				{ x: new Date(2021, 6, 1), y: 69 },
// 				{ x: new Date(2021, 7, 1), y: 68 },
// 				{ x: new Date(2021, 8, 1), y: 61 },
// 				{ x: new Date(2021, 9, 1), y: 50 },
// 				{ x: new Date(2021, 10, 1), y: 41 },
// 				{ x: new Date(2021, 11, 1), y: 33 }
// 			]
// 		},
	
//   ]


// 	}	
  



// chartOptions1 = {
//   title: {
//     text: "Leave type brakedown"
//   },
//   axisX: {
//     title: "Month",
//     interval: 1,
//     intervalType: "month", 
//     valueFormatString: "MMM" 
//   },
//   data: [
//     {
//       type: "column",
//       name: "Series 1",
//       dataPoints: [
//         { x: new Date(2023, 0), y: 10 }, // Jan
//         { x: new Date(2023, 1), y: 15 }, // Feb
//         { x: new Date(2023, 2), y: 25 }, // Mar
//         { x: new Date(2023, 3), y: 30 }, // Apr
//         { x: new Date(2023, 4), y: 28 } , // May
//         { x: new Date(2023, 5), y: 28 }
//       ]
//     },
//     {
//       type: "column",
//       name: "Series 2",
//       dataPoints: [
//         { x: new Date(2023, 0), y: 5 },  // Jan
//         { x: new Date(2023, 1), y: 12 }, // Feb
//         { x: new Date(2023, 2), y: 20 }, // Mar
//         { x: new Date(2023, 3), y: 35 }, // Apr
//         { x: new Date(2023, 4), y: 22 }  // May
//       ]
//     },
//     {
//       type: "column",
//       name: "Series 3",
//       dataPoints: [
//         { x: new Date(2023, 0), y: 7 },  // Jan
//         { x: new Date(2023, 1), y: 14 }, // Feb
//         { x: new Date(2023, 2), y: 22 }, // Mar
//         { x: new Date(2023, 3), y: 38 }, // Apr
//         { x: new Date(2023, 4), y: 25 }  // May
//       ]
//     }
//     // Add more data sets and data points as needed
//   ]
// };



}
