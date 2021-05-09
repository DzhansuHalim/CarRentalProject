import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './components/brand/add-brand/add-brand.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AddImageComponent } from './components/car-image/add-image/add-image.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { CarComponent } from './components/car/car.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { ColorComponent } from './components/color/color.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DetailsComponent } from './components/details/details.component';
import { IndexComponent } from './components/index/index.component';
import { NaviComponent } from './components/navi/navi.component';
import { AddRentalComponent } from './components/rental/add-rental/add-rental.component';
import { RentalComponent } from './components/rental/rental.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [ 
  {path: "", pathMatch:"full", component:IndexComponent},

  {path: "cars", component:CarComponent},
  {path: "cars/add", component:AddCarComponent},

  {path: "carImages", component:CarImageComponent},
  {path: "carImages/add", component:AddImageComponent},

  {path: "colors", component:ColorComponent},
  {path: "colors/add", component:AddColorComponent},


  {path: "brands", component:BrandComponent},
  {path: "brands/add", component:AddBrandComponent},

  {path: "rentals", component:RentalComponent},
  {path: "rentals/add", component:AddRentalComponent},

  {path: "customers", component:CustomerComponent},
  {path: "customers/add", component:AddCustomerComponent},


  {path: "users", component:UserComponent},
  {path: "users/register", component:AddUserComponent},
  {path: "users/login", component:LoginComponent},




  {path: "carDetails", component:IndexComponent},
  {path: "carDetails/car/:carId", component:IndexComponent},
  {path: "carDetails/brand/:brandId", component:IndexComponent},
  {path: "carDetails/color/:colorId", component:IndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
