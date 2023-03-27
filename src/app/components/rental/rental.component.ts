import { Component } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {
   rental:Rental[]=[]
  
    constructor(private RentalService: RentalService){}
  
    ngOnInit():void{
      this.getRental();
  
    }
  
    getRental(){
      this.RentalService.getRental().subscribe(response=>{this.rental=response.data})
      
    }
}
