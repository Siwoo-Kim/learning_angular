import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-chapter6-1-5',
  templateUrl: './chapter6-1-5.component.html',
  styleUrls: ['./chapter6-1-5.component.css']
})
export class Chapter615Component implements OnInit {
  formGroup:FormGroup = new FormGroup({
    to : new FormControl(),
    from : new FormControl()
  });

  to:Date;
  from:Date;

  onFormSubmit(){

    this.to = this.formGroup.value['to'];
    this.from = this.formGroup.value['from'];

  }

  constructor() { }

  ngOnInit() {
  }

}
