import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-8-2-1',
  templateUrl: './example-8-2-1.component.html',
  styleUrls: ['./example-8-2-1.component.css']
})
export class Example821Component implements OnInit {
  myData1: string;
  myData2: string;
  parentData: string;

  constructor() { }

  ngOnInit() {
  }

}
