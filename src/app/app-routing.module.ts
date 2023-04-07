import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SelectMovieComponent } from './select-movie/select-movie.component';
import { SelectShowComponent } from './select-show/select-show.component';

const routes: Routes = [
  {path:"",component:FrontPageComponent},
  {path:"movie", component:SelectMovieComponent},
  {path:"show", component:SelectShowComponent},
  {path:"details", component:DetailsFormComponent},
  {path:"confirm", component:ConfirmBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
