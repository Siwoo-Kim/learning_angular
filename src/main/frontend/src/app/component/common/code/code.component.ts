import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  @Input('code') code:string;
  @Input('title') title:string;

  constructor() { }

  ngOnInit() {
  }

}
