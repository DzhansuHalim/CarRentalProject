import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDeatils } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  carDetails : CarDeatils[] = []; 
  carDetail: CarDeatils;
  carImages : CarImage[];
  dataLoaded = false;
  carId:CarDeatils;
  currentCar: CarDeatils;
  imageBasePath:'https://localhost:44394/';
  
  constructor(
    private carDetailService:CarDetailService, 
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["carid"] ){
        this.getCarDetailsById(params["carid"])
       }
    })
  }


  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response => {
      this.carDetail = response.data; 
      console.log(response.data);
       
    })
  }  

  getCarImagesById(carId: number) {
    this.carImageService.getCarImageById(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
 
  getCarImage(car:CarDeatils){
    if(car.carImage){
      return 'https://localhost:44394'+car.carImage
    }
    else{
      return 'https://localhost:44394/Images/default.jpg'
    }
  }

}
