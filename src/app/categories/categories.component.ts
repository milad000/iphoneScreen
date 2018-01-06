import { Component, OnInit } from "@angular/core";

import { Categories } from "../shared/categories.model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: Categories[] = [
    new Categories("iphone", "5", "/assets/img/iphone-5.jpg"),
    new Categories("iphone", "5c", "/assets/img/iphone-5c.jpg"),
    new Categories("iphone", "5s", "/assets/img/iphone-5s.jpg"),
    new Categories("iphone", "5s", "/assets/img/iphone-5s.jpg"),
    new Categories("iphone", "5s", "/assets/img/iphone-5s.jpg"),
    new Categories("iphone", "5s", "/assets/img/iphone-5s.jpg"),
    new Categories("iphone", "5s", "/assets/img/iphone-5s.jpg")
  ];

  constructor() {}

  ngOnInit() {}
}
