import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  userAddForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private userService : UserService,
    private toastrService: ToastrService
  ) { } 

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(){
    this.userAddForm = this.formBuilder.group({
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }

  add(){
    if(this.userAddForm.valid){
      let userModel = Object.assign({}, this.userAddForm.value)
      this.userService.addUser(userModel).subscribe(response => {
        this.toastrService.success(response.message,"Your account is created")
      }, responseError=>{
        this.toastrService.error( responseError.error.message)
      })

    }else{
      this.toastrService.error("The form is invalid!")
    }
  }
}
