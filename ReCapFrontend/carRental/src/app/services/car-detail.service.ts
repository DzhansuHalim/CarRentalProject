import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDeatils } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  
  apiUrl = "https://localhost:44394/api/cars/";

  constructor(private httpClient: HttpClient) { }

  getCarDetailsById(carId:number):Observable<ListResponseModel<CarDeatils>>{
    let newPath = this.apiUrl + "getcardetails?carId" + carId; 
    return this.httpClient.get<ListResponseModel<CarDeatils>>(newPath);
  }

}
