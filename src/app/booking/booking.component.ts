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

     console.log("you are on onSubmit()");
     const value = form.value;
    //  let newBooking = new Booking(value.fullName,value.email,value.iphoneModel,value.phoneNumber);
     this.http.post('http://192.168.0.109:3000/newbooking',form.value).subscribe
     (data => {
       console.log("data sent : " +data);
     });
  }

  onRefresh(){
    console.log("you are in refresh <-");
    this.appService.onRefresh();
  }

}
