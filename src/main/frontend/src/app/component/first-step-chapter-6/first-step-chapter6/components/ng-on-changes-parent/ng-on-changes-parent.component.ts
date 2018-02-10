import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-parent',
  templateUrl: './ng-on-changes-parent.component.html',
  styleUrls: ['./ng-on-changes-parent.component.css']
})
export class NgOnChangesParentComponent implements OnInit {
  myNumber : number;
  myString : string;

  data : { id : number , name : string } = { id : 0 , name : 'Guest'};

  constructor() { }

  ngOnInit() {
  }

  makingNewObject(){
    this.data = { id : this.data.id , name : this.data.name };
  }
}
