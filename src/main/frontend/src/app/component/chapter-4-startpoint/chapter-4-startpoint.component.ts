import { Component, OnInit } from '@angular/core';
import {chapter4_code} from "../../metadata/chapter4-code";

export class Code{
  constructor(
    public id:string,
    public title:string,
    public code:string
    ){}
}

@Component({
  selector: 'app-chapter-4-startpoint',
  templateUrl: './chapter-4-startpoint.component.html',
  styleUrls: ['./chapter-4-startpoint.component.css']
})
export class Chapter4StartpointComponent implements OnInit {
  codes:Code[] = chapter4_code;

  constructor() { }

  ngOnInit() {
  }

}
