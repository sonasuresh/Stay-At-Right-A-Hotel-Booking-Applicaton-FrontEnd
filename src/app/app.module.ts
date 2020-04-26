import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { AvailabilityComponentComponent } from './Components/availability-component/availability-component.component';
import { BookingComponentComponent } from './Components/booking-component/booking-component.component';
import { ViewBookingComponentComponent } from './Components/view-booking-component/view-booking-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponentComponent } from './Components/contact-component/contact-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    AvailabilityComponentComponent,
    BookingComponentComponent,
    ViewBookingComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
