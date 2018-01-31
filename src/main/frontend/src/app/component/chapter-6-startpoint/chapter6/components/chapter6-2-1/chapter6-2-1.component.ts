import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {equalValidator} from "../../validators/equal-validator";
import {ssnValidator} from "../../validators/ssn-validator";

@Component({
  selector: 'app-chapter6-2-1',
  templateUrl: './chapter6-2-1.component.html',
  styleUrls: ['./chapter6-2-1.component.css']
})
export class Chapter621Component implements OnInit {
  formGroup:FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      'username' : new FormControl('',Validators.required),
      'ssn' : new FormControl('',ssnValidator),
      'passwordsGroup' : new FormGroup({
        'password' : new FormControl('',[Validators.required,Validators.minLength(5) ] ),
        'pconfirm' : new FormControl('')
      },equalValidator)
    })
  }

  valid:boolean;

  onFormSubmit(){
    console.log(this.formGroup.valid);
    this.valid = this.formGroup.valid;
  }

  ngOnInit() {
  }

}
