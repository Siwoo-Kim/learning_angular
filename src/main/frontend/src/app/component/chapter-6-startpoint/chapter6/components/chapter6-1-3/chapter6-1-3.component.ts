import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter6-1-3',
  templateUrl: './chapter6-1-3.component.html',
  styleUrls: ['./chapter6-1-3.component.css']
})
export class Chapter613Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTheSubmit(value:any){
    console.log(value);
  }

}
