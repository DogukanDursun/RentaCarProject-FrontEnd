import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Customer } from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44326/api/customers/getall";
  constructor(private httpClient:HttpClient) { }
  getCustomer():Observable <ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
    }
}
