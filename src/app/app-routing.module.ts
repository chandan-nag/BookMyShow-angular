import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard/auth.guard';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NoPathComponentComponent } from './no-path-component/no-path-component.component';
import { SeatComponent } from './seat/seat.component';
import { TheatreDetailComponent } from './theatre-detail/theatre-detail.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path:'',component:CarouselComponent},
  //{path:'carousal',component:CarouselComponent}
  {path:'movielist',component:MovieListComponent,canActivate:[AuthGuard]},
  {path:'theatre/:id',component:TheatreDetailComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'seat',component:SeatComponent,canActivate:[AuthGuard]},
  {path:'**',component:NoPathComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [CarouselComponent,MovieListComponent,TheatreDetailComponent,LoginComponent,
  RegisterComponent,SeatComponent,NoPathComponentComponent]