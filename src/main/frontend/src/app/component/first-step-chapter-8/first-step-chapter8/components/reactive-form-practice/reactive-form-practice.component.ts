import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-reactive-form-practice',
  templateUrl: './reactive-form-practice.component.html',
  styleUrls: ['./reactive-form-practice.component.css']
})
export class ReactiveFormPracticeComponent {
  productForm: FormGroup;

  constructor(private toastrManager:ToastsManager) {
    this.productForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      price : new FormControl(0,[Validators.min(1),Validators.max(100)]),
      amount : new FormControl(0,[Validators.min(1),Validators.max(999)]),
      description : new FormControl('',[Validators.minLength(4),Validators.maxLength(400)])
    });

  }

  onSubmit(){
    if(this.productForm.valid){
      this.toastrManager.info(`${JSON.stringify(this.productForm.value,null,2)}`);
      return;
    }

    this.toastrManager.warning("Form is not valid");
  }
}
