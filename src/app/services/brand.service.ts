import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModule } from '../models/responseModule';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44326/api/";
  constructor(private httpClient:HttpClient) { }

  getBrand():Observable <ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand:Brand):Observable<ResponseModule>{
    let newPath=this.apiUrl+"brands/Add"
    return this.httpClient.post<ResponseModule>(newPath,brand)
  }
  update(brand:Brand):Observable<ResponseModule>{
    let newPath=this.apiUrl+"brands/update"
    return this.httpClient.post<ResponseModule>(newPath,brand)
  }
  getBrandById(brandId: number) : Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getbycarid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
}
}