import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-example-title',
  templateUrl: './example-title.component.html',
  styleUrls: ['./example-title.component.css']
})
export class ExampleTitleComponent implements OnInit {
  @Input() chapter:string;
  @Input() hide_chapter:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
