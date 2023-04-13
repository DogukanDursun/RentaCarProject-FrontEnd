import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Color } from '../models/color';
import { ResponseModule } from '../models/responseModule';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44326/api/";
  constructor(private httpClient:HttpClient) { }
  getColor():Observable <ListResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
    }
    add(color:Color):Observable<ResponseModule>{
      let newPath=this.apiUrl+"colors/add"
      return this.httpClient.post<ResponseModule>(newPath,color)
    }
    update(color:Color):Observable<ResponseModule>{
      let newPath=this.apiUrl+"colors/update"
      return this.httpClient.post<ResponseModule>(newPath,color)
    }
}
