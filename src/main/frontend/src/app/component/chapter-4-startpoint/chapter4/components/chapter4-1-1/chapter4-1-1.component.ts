import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter4-1-1',
  templateUrl: './chapter4-1-1.component.html',
  styleUrls: ['./chapter4-1-1.component.css']
})
export class Chapter411Component implements OnInit {
  data:string;
  name:string;
  constructor() { }

  onClickHandler(){
    this.data = "Fetched Data";
  }

  onInputHandler(event:Event){
    console.log(event);
    this.name = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }


}
