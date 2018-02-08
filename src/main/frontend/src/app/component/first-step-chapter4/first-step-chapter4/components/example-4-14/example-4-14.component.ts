import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-4-14',
  templateUrl: './example-4-14.component.html',
  styleUrls: ['./example-4-14.component.css']
})
export class Example414Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  myClassObj= {
    myClass1 : true,
    myClass2 : false,
    myClass3 : 1
  }

  myStyle = {
    color : new Date().getDay() == 5 ? 'green' : 'red',
    'font-weight' : new Date().getDay() == 1 ? 'bold' : 'normal'
  };

}
