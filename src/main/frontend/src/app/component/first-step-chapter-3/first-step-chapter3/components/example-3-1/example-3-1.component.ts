import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-example-3-1',
  templateUrl: './example-3-1.component.html',
  styleUrls: ['./example-3-1.component.css']
})
export class Example31Component implements OnInit {
  myData:string;

  ngOnInit() {
  }

  userName:string;

  onSubmitName(name:string){
    this.userName = name;
  }

}
