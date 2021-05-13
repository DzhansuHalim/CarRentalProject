import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import { RentalComponent } from '../rental.component';
@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css']
}) 
export class AddRentalComponent implements OnInit {

  rentalAddForm : FormGroup;
  cars : Car[];
  customers: Customer[];



  today = new Date();
  min = new Date();


  constructor(
    private formBuilder:FormBuilder, 
    private carService : CarService,
    private customerService : CustomerService,
    private rentalService : RentalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCars();
    this.getCustomer();
    this.createRentalAddForm();


  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCustomer(){
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    }); 
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId : localStorage.getItem("carId"), 
      customerId: ["", Validators.required],
      rentDate: ["", Validators.required],
      returnDate: ["", Validators.required]
    })
  }

  add(){
    if(this.rentalAddForm.valid){ 
      let rentalModel = Object.assign({}, this.rentalAddForm.value)
      this.rentalService.addRental(rentalModel).subscribe(response => {  
        console.log(response.data)
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


  setMin(date: Date) {
    this.min = new Date(date);
    this.min.setHours(this.min.getHours() + 12);
  }
}
