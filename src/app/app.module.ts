import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CategoriesComponent } from "./categories/categories.component";
import { BookingComponent } from "./booking/booking.component";
import { FooterComponent } from "./footer/footer.component";
import { PopupComponent } from "./popup/popup.component";
import { MenuComponent } from "./menu/menu.component";
import { showBookingComponent } from "./showbooking/showbooking.component";


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path:'#popup', component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    BookingComponent,
    FooterComponent,
    PopupComponent,
    MenuComponent,
    showBookingComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule,
  RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
