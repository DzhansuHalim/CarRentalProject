import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailComponent } from '../components/car-detail/car-detail.component';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44394/api/cars";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath =  this.apiUrl + "/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 


  getAllByBrandId(brandId: number):Observable<ListResponseModel<Car>>{
    let newPath =  this.apiUrl + "/getallbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 
 
  
  getAllByColorId(colorId: number):Observable<ListResponseModel<Car>>{
    let newPath =  this.apiUrl + "/getallbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  addCar(car : Car): Observable<SingleResponseModel<Car>>{
    let newPath = this.apiUrl + "/add"
    return this.httpClient.post<SingleResponseModel<Car>>(newPath,car)
  }
  
  deleteCar(car : Car): Observable<SingleResponseModel<Car>>{
    let newPath = this.apiUrl + "/delete"
    return this.httpClient.post<SingleResponseModel<Car>>(newPath,car)
  }
  
 
}
