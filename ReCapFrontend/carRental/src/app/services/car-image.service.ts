import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:44394/api/";

  constructor(private httpClient: HttpClient) { }

  getCarImageById(carid:number):Observable<ListResponseModel<CarImage>>{  
    let newPath =  this.apiUrl + "carImages/getimagesbycarid?id="+carid;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImages():Observable<ListResponseModel<CarImage>>{  
    let newPath =  this.apiUrl + "carImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  } 


}
