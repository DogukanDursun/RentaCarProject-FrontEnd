import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


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
}