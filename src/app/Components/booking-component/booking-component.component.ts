import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { BookingServiceService } from 'src/app/booking-service.service';


@Component({
  selector: 'app-booking-component',
  templateUrl: './booking-component.component.html',
  styleUrls: ['./booking-component.component.css']
})
export class BookingComponentComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookingService: BookingServiceService) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      phNo: ['', Validators.required],
      no_of_guests: ['', Validators.required],
      date: ['', Validators.required],
      no_of_rooms: ['', Validators.required]
    });
  }
  book() {
    this.bookingService.book(this.bookForm.value).then((res: any) => alert(res.data.message)).catch(
      () => alert('No Rooms available.'))
  }
}