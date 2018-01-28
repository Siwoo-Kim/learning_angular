import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-5-3-1',
  templateUrl: './chapter-5-3-1.component.html',
  styleUrls: ['./chapter-5-3-1.component.css']
})
export class Chapter531Component implements OnInit {

  message:string;

  greeting(name:string){
    this.message = `Hello ${name}`;
    console.log(`Hello ${name}`);
  }
  constructor() { }

  ngOnInit() {
  }

}
