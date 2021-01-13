import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from '../shared/shared.module';
//import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,  
    ProgressComponent,
    Grafica1Component,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,  
    ProgressComponent,
    Grafica1Component,
    PrincipalComponent
  ]
})
export class PagesModule { }
