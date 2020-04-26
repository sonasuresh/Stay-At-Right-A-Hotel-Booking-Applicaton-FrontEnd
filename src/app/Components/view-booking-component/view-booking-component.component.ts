import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';



@Component({
  selector: 'app-view-booking-component',
  templateUrl: './view-booking-component.component.html',
  styleUrls: ['./view-booking-component.component.css']
})
export class ViewBookingComponentComponent implements OnInit {
  bookings: Array<any> = []
  constructor(private formBuilder: FormBuilder, private bookingService: BookingServiceService) { }

  ngOnInit() {
    this.getAllBookings()
  }

  getAllBookings = () => {
    this.bookingService.getAllBookings().then((res: any) => {
      this.bookings = res.data.message
    })
  }

  cancel(id: Number) {
    this.bookingService.cancelRoom(id).then((res: any) => {
      if (res.error) {
        alert('An Error Occurred');
      }
      else {
        alert(res.data.message)
        this.getAllBookings()
      }
    })
  }
}
