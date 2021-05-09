import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDeatils } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  
  apiUrl = "https://localhost:44394/api/";

  constructor(private httpClient: HttpClient) { }

  getCarDetailsById(carId:number):Observable<SingleResponseModel<CarDeatils>>{
    let newPath = this.apiUrl + "cars/getdetailsbycarid?carId=" + carId; 
    return this.httpClient.get<SingleResponseModel<CarDeatils>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<CarDeatils>>{
    let newPath = this.apiUrl + "cars/getcardetails"; 
    return this.httpClient.get<ListResponseModel<CarDeatils>>(newPath);
  }

  getAllByBrandId(brandId: number):Observable<ListResponseModel<CarDeatils>>{
    let newPath =  this.apiUrl + "cars/getdetailsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDeatils>>(newPath);
  }

  
  getAllByColorId(colorId: number):Observable<ListResponseModel<CarDeatils>>{
    let newPath =  this.apiUrl + "cars/getdetailsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDeatils>>(newPath);
  }

}
