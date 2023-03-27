import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiURL = 'https://localhost:44326/';

  constructor(private httpClient:HttpClient) { }
 
  getCarImages():Observable<ListResponseModel<CarImage>>{
   let newPath = this.apiURL + "CarImages/getall"
   return this.httpClient.get<ListResponseModel<CarImage>>(newPath);    
  }
  
  
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
   let newPath = this.apiURL + "api/CarImages/getbycarid?carId="+carId 
   return this.httpClient.get<ListResponseModel<CarImage>>(newPath);     
  }

  getByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiURL + "api/CarImages/getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
  getImagePath(carImage: string):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiURL+"uploads/Images/="+carImage
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

}
