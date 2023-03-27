import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/SingleResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44326/api/";
  constructor(private httpClient:HttpClient) { }
  getCar():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getcars"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByColor(colorId:number){
    let newPath = this.apiUrl+"cars/getcardetailsbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  
  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycarid?id=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}