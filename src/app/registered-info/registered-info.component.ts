import { Component, OnInit, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm, NgModel } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Booking } from "../shared/Booking.model";
import { AppService } from "../app.service";
@Component({
  selector: "app-registered-info",
  templateUrl: "./registered-info.component.html",
  styleUrls: ["./registered-info.component.scss"]
})
export class RegisteredInfoComponent implements OnInit {
  booking: Booking[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService.onRefresh();
    this.appService.bookingSelectedById.subscribe((data: Booking[]) => {
      this.booking = data;
      console.log("from onInit on registered : "+data);
    });
  }

  onDelete(id: string) {
    this.appService.onDelete(id);
    this.appService.onRefresh();
  }

}
