import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SelectMovieComponent } from './select-movie/select-movie.component';
import { SelectShowComponent } from './select-show/select-show.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsFormComponent } from './details-form/details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    SelectMovieComponent,
    SelectShowComponent,
    ConfirmBookingComponent,
    DetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
