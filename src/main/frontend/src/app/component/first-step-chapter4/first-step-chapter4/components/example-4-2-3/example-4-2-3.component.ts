import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-example-4-2-3',
  templateUrl: './example-4-2-3.component.html',
  styleUrls: ['./example-4-2-3.component.css']
})
export class Example423Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  contents = 'dummy contents';
  someLink = 'templateExpression.com'
  myVal = 20;

  getSomeText() :string{
    return 'Interpolation example. You must remember that all result from template-expression is string';
  }

}
