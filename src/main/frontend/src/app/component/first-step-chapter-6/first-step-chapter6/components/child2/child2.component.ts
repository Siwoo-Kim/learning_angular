import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  isChecked : boolean = false;
  @Input() num:number;

  constructor() { }

  ngOnInit() {
  }

}
