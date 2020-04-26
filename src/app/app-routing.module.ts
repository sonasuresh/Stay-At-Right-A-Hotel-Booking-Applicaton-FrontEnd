import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { AvailabilityComponentComponent } from './Components/availability-component/availability-component.component';
import { BookingComponentComponent } from './Components/booking-component/booking-component.component';
import { ContactComponentComponent } from './Components/contact-component/contact-component.component';
import { ViewBookingComponentComponent } from './Components/view-booking-component/view-booking-component.component';





const routes: Routes = [
	{ path: '', component: HomeComponentComponent },
	{ path: 'availability', component: AvailabilityComponentComponent },
	{ path: 'booking', component: BookingComponentComponent },
	{ path: 'viewbooking', component: ViewBookingComponentComponent },
	{ path: 'contact', component: ContactComponentComponent },



];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
