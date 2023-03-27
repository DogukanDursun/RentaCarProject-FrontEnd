import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { ColorService } from 'src/app/services/color.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit{
  carDetails:Car[]=[]

  colors : Color[]=[];

  imageUrl = "https://localhost:44326/uploads/Images/"
  carImages: CarImage[]=[];
  currentCar:Car
  rental:Rental[]=[];
   currentRental:Rental
   currentImage: CarImage;
   dataLoaded = false ;
 

  constructor(private carDetailService: CardetailService,private activatedRoute:ActivatedRoute,
    private carImageService:CarimageService,
    private brandService:BrandService,
    private colorService:ColorService,
    private carService: CarService){}

  ngOnInit():void{ this.activatedRoute.params.subscribe(params => {
    this.getCarById(params["carId"] )

   
    this.getImageByCarId(params["carId"])
   })
    

  }
  getImageByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      this.dataLoaded=true;

    })
  }

  getImagePath(carImage: CarImage) {
    let path = this.imageUrl + carImage.imagePath;
    return path;
  }

 
  getCarById(id:number) {
    this.carService.getCarById(id).subscribe(response => {
    this.carDetails = response.data;
    this.dataLoaded = true;
    })
  
  } 
  
  setCurrentRental(rental:Rental){
    this.currentRental=rental;
  }

sertCurrentCar(car:Car){
  this.currentCar=car;
}

          
 
}
