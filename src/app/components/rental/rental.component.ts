import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {
   rentals : Rental []=[];
  rentalAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService){}

    ngOnInit(): void {
      this.createRentalAddForm();
    }

    createRentalAddForm(){
      this.rentalAddForm=this.formBuilder.group({
        carId:["",Validators.required],
        rentDate:["",Validators.required],
        customerId:["",Validators.required]
      })
    }
    add(){
      if (this.rentalAddForm.valid) {
        let rental:Rental = Object.assign({}, this.rentalAddForm.value);
        
          this.rentalService.add(rental).subscribe(response=>{
          this.toastrService.success(response.message, "Başarılı!");
         if (response.success==true) {
           this.toastrService.success("Sepete eklendi")
           this.rentalService.add(rental);

           }
        } ,responseError=>{  
          console.log(responseError.error.message)

          if(responseError){
           
              this.toastrService.error(responseError.error.message
                ,"Doğrulama hatası")
                
          } 
          
        }
        )
      } else {
        this.toastrService.error("Lütfen tüm alanları doldurunuz.", "Hata!")
      }
    }
}
