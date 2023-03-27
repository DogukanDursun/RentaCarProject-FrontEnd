import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CarDetail } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarimageService } from 'src/app/services/carimage.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
   carDetails:CarDetail;
  cars : Car[]=[];
  brands: Brand[]=[];
  colors : Color[]=[];
  dataLoaded = false ;
  currentCar:Car| null;
  filterText=""
  imageUrl="https://localhost:44326/Uploads/Images/"
  carImages:CarImage[] = [];
  brandFilter: number = 0;
  colorFilter: number = 0;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
    private carImageService:CarimageService,
    private brandService:BrandService,
    private colorService:ColorService,
 ){}

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"] ){
        this.getCarByColor(params["colorId"])
      }
      else if (params["carId"]) {
        this.getCarById(params["carId"])
      }
      else{
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    });
  }

  getCars(){
    this.carService.getCar(). subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getBrands(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands = response.data;
    });
  }
  getColors(){
    this.colorService.getColor().subscribe(response=>{
      this.colors = response.data;
    });
  }
  getCarByColor(colorId:number){
    this.carService.getCarByColor(colorId)
    .subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarByBrand(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarImage(car:Car){


    
    if (car.imagePath == null) {
      
      let path = this.imageUrl + "DefaultLogo.png"
      return path;

    }
    else{
      let path = this.imageUrl + car.imagePath;
      return path;
    }
  }
  setCurrentCar(car:Car){
    this.currentCar=car;
  }
  
  getCarById(carId:number){
    this.carService.getCarByBrand(carId).subscribe(response => {
      this.cars = response.data;
      
    })
  }
 
  
  reset(){
    this.currentCar = null;

  }

  
}


