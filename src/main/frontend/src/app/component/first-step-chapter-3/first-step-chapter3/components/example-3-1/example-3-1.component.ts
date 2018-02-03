import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-3-1',
  templateUrl: './example-3-1.component.html',
  styleUrls: ['./example-3-1.component.css']
})
export class Example31Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName:string;

  onSubmitName(name:string){
    this.userName = name;
  }

}
