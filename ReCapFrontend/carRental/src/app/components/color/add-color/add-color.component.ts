import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  colorAddForm : FormGroup;
  constructor(
    private formBuilder:FormBuilder, 
    private colorService : ColorService,
    private toastrService: ToastrService
  ) { }
 
  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName:["", Validators.required]
    })
  }
  
  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({}, this.colorAddForm.value)
      this.colorService.addColor(colorModel).subscribe(response => {
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
