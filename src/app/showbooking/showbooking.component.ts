import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { Booking } from '../shared/Booking.model';
import { Router , ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.scss']
})
export class showBookingComponent implements OnInit {
  index: number;
  rowNumber: number[];
  booking:Booking[]=[];
  tests:{};
  constructor(private http:HttpClient,
              private router:Router,
              private route: ActivatedRoute) { 
                // this.rowNumber = [];
                // for (let i = 0; i < this.test.length / 5; i++) {
                //   this.rowNumber.push(i);
                // }
  }

  ngOnInit() {

  }




  // getCurrentCategories(currentIndex) {
  //   let item = [];
  //   let firstIndex = currentIndex * 5;
  //   for (let i = 0; i < 5; i++) {
  //     let nextIndex = firstIndex + i;
  //     if (this.booking[nextIndex]){
  //       item.push(this.booking[nextIndex]);
  //     }
  //   }
  //   return item;
  // }

   onFetch(form: NgForm){

     this.http.get('http://192.168.0.109:3000/booking').subscribe
     (data => {
      //  this.tests=data;
       console.log(data);
      //  console.log(this.tests);
     });
  }

}
