import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-chapter6-1-6',
  templateUrl: './chapter6-1-6.component.html',
  styleUrls: ['./chapter6-1-6.component.css']
})
export class Chapter616Component implements OnInit {

  formGroup : FormGroup = new FormGroup({
    dateRange : new FormGroup({
      from : new FormControl(),
      to : new FormControl()
    })
  })

  constructor() { }


  ngOnInit() {
  }

}
