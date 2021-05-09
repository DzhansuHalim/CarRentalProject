import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/carImage';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html', 
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages : CarImage[];
  constructor(
    private carImageService:CarImageService
  ) { }

  ngOnInit(): void {
    this.getCarImages();
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response =>{
      this.carImages = response.data;
    })
  }

  getCarImageById(carId : number){
    this.carImageService.getCarImageById(carId).subscribe(response =>{
      this.carImages = response.data;
    })
  }

  getCarImage(car:CarImage){
    if(car.imagePath){
      return 'https://localhost:44394'+car.imagePath
    }
    else{
      return 'https://localhost:44394/Images/default.jpg'
    }
  }

}
