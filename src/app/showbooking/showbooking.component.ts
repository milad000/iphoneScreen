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

  onDelete(id: string) {
    this.appService.onDelete(id);
    this.appService.onRefresh();
  }

  onFindById(id: string) {
    this.appService.onFindById(id);
    this.router.navigate(["/step3"]);
    console.log(id);
  }
}
