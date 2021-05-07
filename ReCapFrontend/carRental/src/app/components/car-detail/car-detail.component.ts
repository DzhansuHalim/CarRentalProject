import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDeatils } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
 
  carDetails : CarDeatils[] = []; 
  carImages : CarImage[];
  imageBasePath:'https://localhost:44394/';
  

  constructor( private carDetailService:CarDetailService, 
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCarDetails();
      }

      if(params["id"] ){
        this.getCarImagesById(params["id"])
       }

       this.getCarDetails();
    }) 
  }

    
  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response => {
      this.carDetails = response.data;
    }) 
  }

  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }  

  getCarsByBrand(brandId : number){
    this.carDetailService.getAllByBrandId(brandId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getCarsByColor(colorId : number){
    this.carDetailService.getAllByColorId(colorId).subscribe(response => {
      this.carDetails = response.data;
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
