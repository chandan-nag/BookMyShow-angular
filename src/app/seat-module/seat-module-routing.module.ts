import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatDetailComponent } from './seat-detail/seat-detail.component';

const routes: Routes = [
  {path:'seat',component:SeatDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatModuleRoutingModule { }
