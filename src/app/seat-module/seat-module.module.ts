import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatModuleRoutingModule } from './seat-module-routing.module';
//import { SeatComponent } from './seat/seat.component';
import { SeatDetailComponent } from './seat-detail/seat-detail.component';


@NgModule({
  declarations: [
    SeatDetailComponent
  ],
  imports: [
    CommonModule,
    SeatModuleRoutingModule
  ]
})
export class SeatModuleModule { }
