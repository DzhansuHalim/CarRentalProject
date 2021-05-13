import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDeatils } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html', 
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  imageAddForm : FormGroup;
  carImages : CarImage[];
  selectedFile:File; 
  cars : Car[];

  

  constructor(
    private formBuilder:FormBuilder, 
    private carImageService : CarImageService,
    private toastrService: ToastrService,
    private carService : CarService

  ) { }

  ngOnInit(): void {
    this.createImageAddForm();
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
    })
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response =>{
      this.carImages = response.data;
    })
  }

  createImageAddForm(){ 
    this.imageAddForm = this.formBuilder.group({
       //carId:["", Validators.required]
    })
  } 

  add(){
    if(this.imageAddForm.valid){
      let imageModel = Object.assign({}, this.imageAddForm.value)
      this.carImageService.addImage2(this.selectedFile).subscribe(response => {
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

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
  }

}
