import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Booking } from "./shared/booking.model";

@Injectable()
export class AppService {
  booking: Booking[];
  bookingChanged = new EventEmitter<Booking[]>();
  constructor(private http: HttpClient) {}

  onRefresh() {
    setTimeout(() => {
      this.http
        .get("http://192.168.0.109:3000/booking")
        .subscribe((data: Booking[]) => {
          this.booking = data;
          this.bookingChanged.emit(data);
          console.log("data comming from server from app.service : " + data);
          console.log(
            "data.length comming from server from app.service : " + data.length
          );
        });
    }, 500);
  }
}
// console.log("booking.length out of onRefresh() from app.service : " + this.booking.length);
