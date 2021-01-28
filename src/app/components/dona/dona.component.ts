import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  // public doughnutChartLabels: Label[] = ['Pan', 'Refresco', 'Tacos'];
  // public doughnutChartData: MultiDataSet = [
  //   [10, 15, 80]
  // ];
  public doughnutChartType: ChartType = 'doughnut';
//   public colors: Color[]=[
//   { backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
// ]

@Input() title:string='Sin Titulo'
@Input('labels') doughnutChartLabels: Label[] = ['Arroz', 'Azucar', 'Leche'];
@Input ('data') doughnutChartData: MultiDataSet = [
    [60, 10, 50]
  ];
@Input() colors: Color[]=[
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
