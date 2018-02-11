import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-basic-rxjs',
  templateUrl: './basic-rxjs.component.html',
  styleUrls: ['./basic-rxjs.component.css']
})
export class BasicRxjsComponent {
  myObservable: Observable<string>;
  /* Observable is data source.
    Observable is not same with myObservable
    myObservable is only used once,
    observable can be reused
  */
  constructor(){
    this.myObservable = Observable.create(observer => {
      observer.next('First data in Observable');
      observer.next('Second data in Observable');
      observer.next('Third data in Observable');
    });
  }


  stringList: string[] = [];
  stringListWithMap: string[] = [];
  stringListWithFilter: string[] = [];

  onFireSubscribe() {
    /* Observable making a myObservable when observer subscribes it */
    this.myObservable.subscribe(next => {
          this.stringList.push(next);
    });
  }


  onFireSubscribeMap() {
    this.myObservable
      .map(value => value.concat(" with map operator"))
      .subscribe(next => this.stringListWithMap.push(next) );
  }

  onFireSubscribeFilter() {
    this.myObservable
      .filter(value => value.indexOf('Second') < 0)
      .subscribe(next => this.stringListWithFilter.push(next) );
  }
}
