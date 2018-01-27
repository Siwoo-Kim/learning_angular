import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chapter5-1-1',
  templateUrl: './chapter5-1-1.component.html',
  styleUrls: ['./chapter5-1-1.component.css']
})
export class Chapter511Component implements OnInit {
  @Input() menuName:string;
  @Input() menuPrice:number;

  constructor() { }

  ngOnInit() {
  }

}
