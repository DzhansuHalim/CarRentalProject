import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [ 
  {path: "", pathMatch:"full", component:NaviComponent},

  {path: "cars", component:CarComponent},

  {path: "colors", component:ColorComponent},
  {path: "colors/add", component:AddColorComponent},


  {path: "brands", component:BrandComponent},
  {path: "rentals", component:RentalComponent},
  {path: "customers", component:CustomerComponent},
  {path: "users", component:UserComponent},



  {path: "carDetails", component:CarDetailComponent},
  {path: "carDetails/car/:carId", component:CarDetailComponent},
  {path: "carDetails/brand/:brandId", component:CarDetailComponent},
  {path: "carDetails/color/:colorId", component:CarDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
