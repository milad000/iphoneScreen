import { Component, OnInit } from "@angular/core";

import { Categories } from "../shared/categories.model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  index: number;
  rowNumber: number[];
  categories: Categories[] = [
    new Categories("iphone", "5", "./assets/img/iphone-5.jpg"),
    new Categories("iphone", "5c", "./assets/img/iphone-5c.jpg"),
    new Categories("iphone", "5s", "./assets/img/iphone-5s.jpg"),
    new Categories("iphone", "6", "./assets/img/iphone-6.jpg"),
    new Categories("iphone", "6 plus", "./assets/img/iphone-6.jpg"),
    new Categories("iphone", "6s", "./assets/img/iphone-6.jpg"),
    new Categories("iphone", "6s plus", "./assets/img/iphone-6s-plus.jpg"),
    new Categories("iphone", "7", "./assets/img/iphone-7.jpg"),
    new Categories("iphone", "7 plus", "./assets/img/iphone-7-plus-r.jpg"),
    new Categories("iphone", "8", "./assets/img/iphone-8.jpg"),
    new Categories("iphone", "8 plus", "./assets/img/iphone-8-plus.jpg"),
    new Categories("iphone", "X", "./assets/img/iphone-X.jpg")
  ];

  constructor() {
    this.rowNumber = [];
    for (let i = 0; i < this.categories.length / 5; i++) {
      this.rowNumber.push(i);
    }
  }

  getCurrentCategories(currentIndex) {
    let item = [];
    let firstIndex = currentIndex * 5;
    for (let i = 0; i < 5; i++) {
      let nextIndex = firstIndex + i;
      if (this.categories[nextIndex]){
        item.push(this.categories[nextIndex]);
      }
    }
    return item;
  }

  ngOnInit() {}
}
