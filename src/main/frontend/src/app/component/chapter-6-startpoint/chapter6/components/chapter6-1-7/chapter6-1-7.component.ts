import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-chapter6-1-7',
  templateUrl: './chapter6-1-7.component.html',
  styleUrls: ['./chapter6-1-7.component.css']
})
export class Chapter617Component implements OnInit {
  myControl:FormControl = new FormControl('Guest');
  name:String;

  constructor() {
    this.myControl.valueChanges
      .debounceTime(500)
      .subscribe(data => this.name = data );
  }

  ngOnInit() {
  }

}
