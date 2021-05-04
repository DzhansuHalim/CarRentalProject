import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [ 
  {path: "", pathMatch:"full", component:CarDetailComponent},
  {path: "carDetails", component:CarDetailComponent},
  {path: "carDetails/brand/:brandId", component:CarDetailComponent},
  {path: "carDetails/color/:colorId", component:CarDetailComponent},
  {path: "carDetails/car/:carId", component:CarDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
