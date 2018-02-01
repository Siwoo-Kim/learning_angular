import { Component, OnInit } from '@angular/core';
import {Code} from "../../model/code";
import {chapter7_code} from "../../metadata/chapter7-code";

@Component({
  selector: 'app-chapter-7-startpoint',
  templateUrl: './chapter-7-startpoint.component.html',
  styleUrls: ['./chapter-7-startpoint.component.css']
})
export class Chapter7StartpointComponent implements OnInit {
  codes:Code[] = chapter7_code;

  constructor() { }

  ngOnInit() {
  }

}
