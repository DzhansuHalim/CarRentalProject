import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44394/api/customers";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + "/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  addCustomer(customer : Customer): Observable<ResponseModel>{
    let newPath = this.apiUrl + "/add"
    return this.httpClient.post<ResponseModel>(newPath, customer)
  }
}
