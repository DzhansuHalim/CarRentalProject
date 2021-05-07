import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { AddBrandComponent } from './components/brand/add-brand/add-brand.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { LoginComponent } from './components/user/login/login.component';

import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    RentalComponent,
    CustomerComponent,
    UserComponent,
    NaviComponent,
    CarDetailComponent,
    AddColorComponent,
    AddBrandComponent,
    AddUserComponent,
    LoginComponent,
    AddCarComponent,
    AddCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
