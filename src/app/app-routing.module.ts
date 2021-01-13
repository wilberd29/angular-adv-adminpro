import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { CommonModule } from '@angular/common';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

{ path: '**', component: NopagefoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
    CommonModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
