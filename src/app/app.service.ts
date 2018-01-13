import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Booking } from "./shared/booking.model";
import { timeout } from "q";
import { setInterval } from "timers";

@Injectable()
export class AppService {
  bookingChanged = new EventEmitter<Booking[]>();
  constructor(private http: HttpClient) {

  }

  onRefresh() {
    setTimeout(() => {
      this.http
        .get("http://192.168.0.109:3000/booking")
        .subscribe((data: Booking[]) => {
          this.bookingChanged.emit(data);
        });
    }, 100);
  }
}
