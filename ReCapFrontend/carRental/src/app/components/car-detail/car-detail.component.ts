import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDeatils } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
 
  carDetails : CarDeatils[] = []; 
  carDetail: CarDeatils;
  carImages : CarImage[];

  filterText = "";

  brands: Brand[];
  currentBrand:Brand;
  colors: Color[];
  currentCar:CarDeatils;

  rentTheCar=false;
  carDetailshow = false;

  dataLoaded = false;
  carId:CarDeatils;
  imageBasePath = 'https://localhost:44394';
  currentImage:CarImage;

  constructor( private carDetailService:CarDetailService, 
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private brandService:BrandService,
    private colorService: ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else if(params["carId"]){
        this.getCarDetailsById(params["carId"]);
        this.getCarImagesById(params["carId"]);

      }else{
        this.getCarDetails();
      }

      if(params["id"] ){
        this.getCarImagesById(params["id"])
       }

       this.getCarDetails();
       this.getBrands();
    }) 
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  } 

  setCurrentBrand( brand : Brand){
    this.currentBrand = brand;
  }

    
  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    }) 
  }


  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response => {
      this.carDetail = response.data;
      this.rentTheCar = false;
      this.carDetailshow = true;
      console.log(response.data);

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
      console.log(response.data);   
    });
  }


  getCarImage(car:CarDeatils){
      if(car.carImage){
        return this.imageBasePath+car.carImage
      }
      else{
        return 'https://localhost:44394/Images/default.jpg'
      }
  }

  addRental(car:CarDeatils){
    this.currentCar = car;
    this.rentTheCar=true;
    this.carDetailshow = false;
    localStorage.setItem("carId", this.currentCar.carId.toString())
  }




}
