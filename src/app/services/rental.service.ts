import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModule } from '../models/responseModule';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44326/api/";
  constructor(private httpClient:HttpClient) { }

  getRental():Observable <ListResponseModel<Rental>>{
     let newPath = this.apiUrl + 'rentals/getRentalsDetail';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
}
getByCarId(carId:number):Observable<ListResponseModel<Rental>>{
  let newPath=this.apiUrl+"rentals/getRentalByCarId?CarId="+carId
  return this.httpClient.get<ListResponseModel<Rental>>(newPath);
}
add(rental:Rental):Observable<ResponseModule>{
  return this.httpClient.post<ResponseModule>(this.apiUrl+"/rulesforadding",rental)
}
checkRulesForAdding(rental:Rental):Observable<ResponseModule>{
  let newUrl = this.apiUrl + "/rulesforadding"
  return this.httpClient.post<ResponseModule>(newUrl, rental);
}
}
