import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';


import { Booking } from '../shared/booking.model';
import { AppService } from '../app.service';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  
  constructor(private http:HttpClient,
              private router:Router,
              private route: ActivatedRoute,
            private appService: AppService ) { 
  }

  ngOnInit() {
  }

   onSubmit(form: NgForm){
      this.appService.onSubmit(form);
  }

  onRefresh(){
    this.appService.onRefresh();
  }

}
