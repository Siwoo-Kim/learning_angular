import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter6-1-2',
  templateUrl: './chapter6-1-2.component.html',
  styleUrls: ['./chapter6-1-2.component.css']
})
export class Chapter612Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName:string;

  onSubmit(value:any){
    console.log(value);
    this.userName = value['username'];
  }
}
