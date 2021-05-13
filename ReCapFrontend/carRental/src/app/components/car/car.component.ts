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
  image = false;
  add =false;

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
    console.log(this.currentCar = car);
    this.carService.deleteCar(car).subscribe(response => {
      this.toastrService.success(response.message);
    }, responseError=>{

      if(responseError.error.message == null){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage)          
        }
      }
      else{
        this.toastrService.error(responseError.error.message)          
      }

    })


    
  }

  addImage(car : Car){
    this.image = true; 
    this.add = false;
    this.currentCar = car;
    localStorage.setItem("carId",this.currentCar.carId.toString())
  }

  
  addCar(){
    this.image = false;
    this.add = true;
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
