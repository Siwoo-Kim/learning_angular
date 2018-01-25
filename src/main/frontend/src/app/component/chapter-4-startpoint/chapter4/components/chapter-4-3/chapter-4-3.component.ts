import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-4-3',
  templateUrl: './chapter-4-3.component.html',
  styleUrls: ['./chapter-4-3.component.css']
})
export class Chapter43Component implements OnInit {
  cookiedName:string;

  constructor() {
    setTimeout(()=>{
      this.cookiedName = "user01@email.com"
    },3000);
  }

  ngOnInit() {
  }

}
