import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';
import { CustomerComponent } from '../customer.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerAddForm : FormGroup;
  users : User[];
  
  constructor(
    private formBuilder:FormBuilder, 
    private userService : UserService,
    private customerService : CustomerService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.createCustomerAddForm();
  }

  getUsers(){
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  createCustomerAddForm(){
    this.customerAddForm = this.formBuilder.group({
      userId:["", Validators.required],
      companyName:["", Validators.required],
    })
  }

  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({}, this.customerAddForm.value)
      console.log(customerModel);
      this.customerService.addCustomer(customerModel).subscribe(response => {
        this.toastrService.success(response.message)
      }, responseError=>{
        console.log(responseError.error.message);
        this.toastrService.error(responseError.error.message)          

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
