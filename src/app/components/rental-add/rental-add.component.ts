import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})

export class RentalAddComponent  implements OnInit {
  @NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,FormGroup
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

cars : Car[]=[];
rentals: Rental[] = [];
imageUrl="https://localhost:44326/Uploads/Images/"
  rentalAddForm: FormGroup;
  constructor( private formBulilder: FormBuilder,
    
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.createRentalAddForm();
      this.activatedRoute.params.subscribe((params) => {
        if (params['Id']) {
          this.carService.getCarDetailsByCarId(params['Id']).subscribe((response) => {
            this.cars = response.data;
            this.getRentDates(params['Id']);
          });
        }
      });
    }
  
    navigateToPay(rentalId: number) {
      this.router.navigate(['payment/pay', rentalId]);
    }
    createRentalAddForm() {
      this.rentalAddForm = this.formBulilder.group({
        rentDate: [
          new Date().toISOString().substring(0, 10),
          Validators.required,
        ],
        returnDate: ['', Validators.required],
        customerId: ['', Validators.required],
      });
    }
    add() {
      if (this.rentalAddForm.valid) {
        let rental: Rental = Object.assign({}, this.rentalAddForm.value);
        rental.carId = this.cars[0].Id;
        let rentPrice=this.calculateDiff(rental.returnDate,rental.rentDate)*this.cars[0].dailyPrice
        this.rentalService.add(rental).subscribe({
          next: (response) => {
            // console.log(rental);
            // console.log((this.calculateDiff(rental.returnDate,rental.rentDate).toString()))
  
            this.toastrService.success(response.message, 'Başarılı!');
            this.router.navigate([
              '/payment/' +
                this.cars[0].Id +
                '/' +
                rentPrice
                
            ]);
          },
          error: (responseError) => {
            this.toastrService.error(responseError.error.message, 'Başarısız!');
          },
        });
      } else {
        this.toastrService.error('Lütfen tüm alanları doldurunuz.', 'Hata!');
      }
    }
  
    getCarImage(imagePath: string): string {
      const url = `${this.imageUrl}`;
      if (imagePath) {
        return `${url + imagePath}`;
      }
      return url + 'DefaultImage.jpg';
    }
  
    getRentDates(cardId: number) {
      this.rentalService.getByCarId(cardId).subscribe((response) => {
        this.rentals = response.data;
      });
    }
  
    calculateDiff(endDate:Date,startDate:Date) {
      const rentDate = new Date(startDate);
      const returnDate = new Date(endDate);
  
      return Math.floor(
        (Date.UTC(
          returnDate.getFullYear(),
          returnDate.getMonth(),
          returnDate.getDate()
        ) -
          Date.UTC(
            rentDate.getFullYear(),
            rentDate.getMonth(),
            rentDate.getDate()
          )) /
          (1000 * 60 * 60 * 24)
      );
    }
    
}
