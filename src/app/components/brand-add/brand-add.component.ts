import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit{
  brandAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
      
    });
  }
  add() {
    if (this.brandAddForm.valid) {
      let carModule= Object.assign({},this.brandAddForm.value)
      
      
      
      this.brandService.add(carModule).subscribe(
        response=>{
  
          this.toastrService.success(response.message,"Başarılı")}
          ,responseError=>{
            if(responseError.error.Errors.Length>0){
             
              for (let i = 0; i < responseError.error.Errors.Length; i++) {
               
                 this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
              }
         
            }
          
          })

}
  }
}
