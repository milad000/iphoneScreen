import { Component, OnInit, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm, NgModel } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Booking } from "../shared/Booking.model";
import { AppService } from "../app.service";

@Component({
  selector: "app-showbooking",
  templateUrl: "./showbooking.component.html",
  styleUrls: ["./showbooking.component.scss"]
})
export class showBookingComponent implements OnInit {
  index: number;
  booking: Booking[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService
  ) {

  }

  ngOnInit() {
    this.appService.onRefresh();
    this.appService.bookingChanged.subscribe((data: Booking[]) => {
      this.booking = data;
    });
  }
  onDelete(id: string){
    this.http.delete('http://192.168.0.109:3000/booking/' + id).subscribe((data: Booking[]) => {
      console.log(data);
    });
    this.appService.onRefresh();
  }
}
