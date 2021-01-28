import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';

//Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PrincipalComponent } from './principal.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

//import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,  
    ProgressComponent,
    Grafica1Component,
    PrincipalComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
    // ChartsModule
  ],
  exports: [
    DashboardComponent,  
    ProgressComponent,
    Grafica1Component,
    PrincipalComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
