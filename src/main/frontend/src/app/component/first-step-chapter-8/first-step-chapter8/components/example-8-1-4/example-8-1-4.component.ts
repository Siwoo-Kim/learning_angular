import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-example-8-1-4',
  templateUrl: './example-8-1-4.component.html',
  styleUrls: ['./example-8-1-4.component.css']
})
export class Example814Component implements OnInit {
  myData:string;
  /*two-way databinding*/
  @ViewChild('myInput') myInput: NgModel;
  /*Searching template element by ViewChild decorator*/

  ngOnInit() {
    this.myInput.valueChanges.subscribe(value => console.log(value));
    /*invoke the _value property is changed*/
    this.myInput.statusChanges.subscribe(status => console.log(status));

  }

  isValid(): boolean{
    return this.myInput.valid;
  }

}
