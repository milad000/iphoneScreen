import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Booking } from "./shared/booking.model";
import { timeout } from "q";
import { Router, ActivatedRoute } from "@angular/router";


@Injectable()
export class AppService {
  bookingChanged = new EventEmitter<Booking[]>();
  bookingSelectedById = new EventEmitter<Booking[]>();
  constructor(private http: HttpClient,
    private router: Router) {}

  onRefresh() {
    setTimeout(() => {
      this.http
        .get("http://192.168.0.109:3000/booking")
        .subscribe((data: Booking[]) => {
          this.bookingChanged.emit(data);
        });
    }, 100);
  }

  onSubmit(form) {
    // const value = form.value;
    //  let newBooking = new Booking(value.fullName,value.email,value.iphoneModel,value.phoneNumber);
    this.http
      .post("http://192.168.0.109:3000/newbooking", form.value)
      .subscribe((data: Booking[]) => {
        this.bookingSelectedById.emit(data);
      });
      this.router.navigate(['/step3']);

  }

  onFindById(id: string) {
    this.http
      .get("http://192.168.0.109:3000/bookingapp/" + id)
      .subscribe((data: Booking[]) => {
        // console.log(data);
      });
  }

  onDelete(id: string) {
    this.http
      .delete("http://192.168.0.109:3000/booking/" + id)
      .subscribe((data: Booking[]) => {
        // console.log(data);
      });
      
  }
}
