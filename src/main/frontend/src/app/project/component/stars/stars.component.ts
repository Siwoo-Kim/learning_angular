import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styles: ['.starrating  { color : #d17581;}']
})
export class StarsComponent implements OnInit {
  @Input() rating:number;
  @Input() count : number =5;
  stars : boolean[] = [];

  constructor() { }

  ngOnInit() {

    for(let i=1;i<=this.count;i++){
      this.stars.push(i < this.rating );
    }

  }

}
