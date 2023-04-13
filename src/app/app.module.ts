import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{BrowserAnimationsModule}from'@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { CommonModule } from '@angular/common';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';



@NgModule({
  declarations: [
    AppComponent,
   CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomersComponent,
    CardetailComponent,
    RentalComponent,
    CarimageComponent,
    FilterPipePipe,
    CartSummaryComponent,
    RentalAddComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
   
  ],
  imports: [
    ReactiveFormsModule,
  
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
