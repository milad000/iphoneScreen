import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { Booking } from '../shared/booking.model';
import { Router , ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  
  constructor(private http:HttpClient,
              private router:Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

   onSubmit(form: NgForm){

     console.log("you are on onSubmit()");
     const value = form.value;
    //  let newBooking = new Booking(value.fullName,value.email,value.iphoneModel,value.phoneNumber);
     console.log( value.fullName);
    //  console.log( JSON.stringify(newBooking));
     this.http.post('http://192.168.0.109:3000/newbooking',form.value).subscribe
     (data => {
       console.log("date sent : " +data);
       console.log("form.value : " + form.value);
       console.log("JSON.stringify(form.value) : " + JSON.stringify(form.value));
      //  this.router.navigate(['#popup'],{relativeTo: this.route});
     });
  }

}
