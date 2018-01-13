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
import { AppService } from "./app.service";
import { RegisteredInfoComponent } from './registered-info/registered-info.component';


const appRoutes: Routes = [
  {path: 'step1', component: CategoriesComponent},
  {path:'step2', component: BookingComponent},
  {path:'step3', component: RegisteredInfoComponent},
  {path:'admin', component: showBookingComponent},
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
    showBookingComponent,
    RegisteredInfoComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule,
  RouterModule.forRoot(appRoutes)],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
