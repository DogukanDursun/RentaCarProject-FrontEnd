import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/SingleResponseModel';
import { Car } from '../models/car';
import { ResponseModule } from '../models/responseModule';

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
  
  getCarById(Id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycarid?id=" + Id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsByCarId(Id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycardetailid?Id="+Id
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByColorAndBrand(brandId:number, colorId:number){
    let newUrl = this.apiUrl + 
    "cars/getcardetailsbycolorandbrand?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }
  add(car:Car):Observable<ResponseModule>{
    let newPath=this.apiUrl+"cars/add"
    return this.httpClient.post<ResponseModule>(newPath,car)
  }
  update(car:Car):Observable<ResponseModule>{
    let newPath=this.apiUrl+"cars/update"
    return this.httpClient.post<ResponseModule>(newPath,car)
  }
}