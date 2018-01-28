import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-chapter5-2-1',
  templateUrl: './chapter5-2-1.component.html',
  styleUrls: ['./chapter5-2-1.component.css']
})
export class Chapter521Component implements OnInit,OnChanges {

  @Input() greeting:string;
  @Input() user: {name : string};
  @Input() userName:string;

  message:string = 'Initial message';

  ngOnChanges(changes: SimpleChanges): void {
    for(var key in changes){
      console.log(key +" : "+JSON.stringify(changes[key],null,2));
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
