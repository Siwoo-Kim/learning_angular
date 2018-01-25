import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter4-1',
  templateUrl: './chapter4-1.component.html',
  styleUrls: ['./chapter4-1.component.css']
})
export class Chapter41Component implements OnInit {
  name:string;
  isHidden:boolean;

  constructor() {
    this.name = "Hello Angular!";
    this.isHidden = true;
  }

  onEventHandler(event:Event){
    console.log("Event is triggered!")
  }

  ngOnInit() {
  }

}
