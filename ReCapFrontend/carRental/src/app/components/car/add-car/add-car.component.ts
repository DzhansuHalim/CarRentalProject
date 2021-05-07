import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({ 
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carAddForm : FormGroup;
  brands : Brand[];
  colors: Color[];

  constructor(  
    private formBuilder:FormBuilder, 
    private carService : CarService,
    private colorService : ColorService,
    private brandService : BrandService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColor();
    this.getBrand();
  }

  getColor(){
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrand(){
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    }); 
  }
  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      modelYear:["", Validators.required],
      dailyPrice:["", Validators.required],
      descriptionCar:["", Validators.required],
      brandId:["", Validators.required],
      colorId: ["", Validators.required]
    })
  }

  add(){
    if(this.carAddForm.valid){
      let brandModel = Object.assign({}, this.carAddForm.value)
      this.carService.addCar(brandModel).subscribe(response => {
        this.toastrService.success(response.message)
      }, responseError=>{

        if(responseError.error.message == null){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage)          
          }
        }
        else{
          this.toastrService.error(responseError.error.message)          
        }

      })

    }else{
      this.toastrService.error("The form is invalid!")
    }
  }
}
