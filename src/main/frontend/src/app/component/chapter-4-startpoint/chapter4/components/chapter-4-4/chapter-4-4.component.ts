import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-chapter-4-4',
  templateUrl: './chapter-4-4.component.html',
  styleUrls: ['./chapter-4-4.component.css']
})
export class Chapter44Component implements OnInit {
  inputString:string;
  observableInput:FormControl = new FormControl();

  constructor() {
    this.observableInput.valueChanges
      .debounceTime(500)
      .subscribe( value => this.inputString = value );
  }

  onKeyUpHandler(event : any){
    this.inputString = event.target.value;
  }



  ngOnInit() {
  }


}
