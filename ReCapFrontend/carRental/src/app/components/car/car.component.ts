import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car', 
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[] = []; 
  currentCar : Car;
  selectedCar: Car;
  constructor( private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCars();
      }

    })  
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  deleteCar( car : Car){
    this.carService.deleteCar(car).subscribe(response => {
      this.toastrService.success(response.message);
      localStorage.setItem("carId",response.data.descriptionCar)

    })
  }

  getCarsByBrand(brandId : number){
    this.carService.getAllByBrandId(brandId).subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsByColor(colorId : number){
    this.carService.getAllByColorId(colorId).subscribe(response => {
      this.cars = response.data;
    })
  }

  setCurrentCar( car : Car){
    this.currentCar = car;
    console.log(this.currentCar = car);
  }
 
}
