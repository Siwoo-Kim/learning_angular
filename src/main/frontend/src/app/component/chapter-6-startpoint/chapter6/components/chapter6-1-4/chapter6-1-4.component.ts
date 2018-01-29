import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chapter6-1-4',
  templateUrl: './chapter6-1-4.component.html',
  styleUrls: ['./chapter6-1-4.component.css']
})
export class Chapter614Component implements OnInit {
  @Output() submitEmitter:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
    this.submitEmitter.emit(value);
  }
}
