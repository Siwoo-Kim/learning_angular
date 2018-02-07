import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-4-2-4',
  templateUrl: './example-4-2-4.component.html',
  styleUrls: ['./example-4-2-4.component.css']
})
export class Example424Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  someImgUrl:string="/assets/img/iu/iu.jfif";
  contents = "Property binding";


}
