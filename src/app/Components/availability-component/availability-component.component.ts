import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';


@Component({
  selector: 'app-availability-component',
  templateUrl: './availability-component.component.html',
  styleUrls: ['./availability-component.component.css']
})
export class AvailabilityComponentComponent implements OnInit {
 checkForm: FormGroup;
 availability:Array<any>;

  constructor(private formBuilder: FormBuilder, private bookingService: BookingServiceService) { }
  ngOnInit() {
  this.createForm()
  }
  createForm() {
    this.checkForm = this.formBuilder.group({
     
      date: ['', Validators.required]
    });
  }
  
check(){
	this.bookingService.checkAvailability(this.checkForm.value).then((res: any) => {
      if (res.error) {

        alert('An Error Occurred');
      }
      else {
        this.availability=res.data.message
        
      }
    })
}
}
