import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
     
    });
  }
  add() {
    if (this.colorAddForm.valid) {
      let carModule= Object.assign({},this.colorAddForm.value)
      
      
      
      this.colorService.add(carModule).subscribe(
        response=>{
  
          this.toastrService.success(response.message," Ekleme Başarılı")}
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
