import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDeatils } from 'src/app/models/carDetails';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
 
  carDetails : CarDeatils[] = []; 
  constructor( private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{     
        this.getCarDetailsById(params["carId"])
    }) 

  }

  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  

}
