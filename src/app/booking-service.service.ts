import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor() { }
  book(data: any) {
    const body = {
      name: data.name,
      phNo: data.phNo,
      no_of_members: data.no_of_guests,
      date: data.date,
      no_of_rooms: data.no_of_rooms

    }
    return axios.post("http://localhost:3000/booking/book", { ...body })
  }
  getAllBookings() {
    return axios.get("http://localhost:3000/booking/getAllBookings")
  }
  cancelRoom(id: any) {
    const data = {
      _id: id
    }
    return axios.delete("http://localhost:3000/booking/cancelBooking", { data })
  }
  checkAvailability(date: any) {
    console.log(date.date)
    console.log(date)
    return axios.get("http://localhost:3000/booking/getAvailability/" + date.date)

  }
}
