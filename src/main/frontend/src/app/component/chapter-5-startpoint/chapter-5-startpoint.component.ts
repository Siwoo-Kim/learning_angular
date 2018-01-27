import { Component, OnInit } from '@angular/core';
import {chapter5_code} from "../../metadata/chapter5-code";
import {Code} from "../../model/code";

@Component({
  selector: 'app-chapter-5-startpoint',
  templateUrl: './chapter-5-startpoint.component.html',
  styleUrls: ['./chapter-5-startpoint.component.css']
})
export class Chapter5StartpointComponent implements OnInit {
  codes:Code[] = chapter5_code;

  constructor() { }

  ngOnInit() {
  }

  menu:string = "Aroma Latte";

  onMenuHandler( { target }){
    this.menu = target.value;
  }

  quantity:number;


}
