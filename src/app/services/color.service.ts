import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44326/api/colors/getall";
  constructor(private httpClient:HttpClient) { }
  getColor():Observable <ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)
    }
}
