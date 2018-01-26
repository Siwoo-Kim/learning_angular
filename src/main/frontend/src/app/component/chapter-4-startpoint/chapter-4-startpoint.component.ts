import { Component, OnInit } from '@angular/core';
import {chapter4_code} from "../../metadata/chapter4-code";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

export class Code{
  constructor(
    public id:string,
    public title:string,
    public code:string
    ){}
}

@Component({
  selector: 'app-chapter-4-startpoint',
  templateUrl: './chapter-4-startpoint.component.html',
  styleUrls: ['./chapter-4-startpoint.component.css']
})
export class Chapter4StartpointComponent implements OnInit {
  codes:Code[] = chapter4_code;
  date:Date = new Date();

  constructor() { }

  ngOnInit() {
    let mySubscription:Subscription =
      new Observable(subscriber => { subscriber.next([1,2,3,4,5])})
      .subscribe(data => (<Array<number>>data).forEach(item => console.log(item) ));

    mySubscription.unsubscribe();
  }

}
