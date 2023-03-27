import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customers';
import { CustomerService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
    customer:Customer[]=[]
  
    constructor(private carDetailService: CustomerService){}
  
    ngOnInit():void{
      this.getCustomers();
  
    }
  
    getCustomers(){
      this.carDetailService.getCustomer().subscribe(response=>{this.customer=response.data})
      
    }
}
