import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent {
  carImages : CarImage[]=[];
  dataLoaded = false;

  constructor(private carImageService:CarimageService,private activatedRoute:ActivatedRoute) {}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
      }
      else if (params["carImage"]) {
        this.getImagePath(params["carImage"])
      }
      else
      {
        this.getCarImages()
      }   

     
     
    })
   }

   getImagePath(carImage:string ){
    this.carImageService.getImagePath(carImage).subscribe(response=>{
      this.carImages=response.data
      this.dataLoaded=true;
    })
   }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
     this.carImages=response.data    
     this.dataLoaded = true;
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
    this.carImages=response.data
    this.dataLoaded = true;
  })  
  }
}
