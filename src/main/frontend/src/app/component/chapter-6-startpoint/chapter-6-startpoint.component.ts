import { Component, OnInit } from '@angular/core';
import {chapter6_code} from "../../metadata/chapter6-code";
import {Code} from "../../model/code";

@Component({
  selector: 'app-chapter-6-startpoint',
  templateUrl: './chapter-6-startpoint.component.html',
  styleUrls: ['./chapter-6-startpoint.component.css']
})
export class Chapter6StartpointComponent implements OnInit {
  codes:Code[] = chapter6_code;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
  }

  result:any;

  onSubmitHandler(value:any){
    console.log(value);
    this.result = value;
  }

}
