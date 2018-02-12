import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-example-8-2-1-child',
  templateUrl: './example-8-2-1-child.component.html',
  styleUrls: ['./example-8-2-1-child.component.css']
})
export class Example821ChildComponent implements OnInit {
  @Input() passingData: string;
  @Output() passingDataChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  onInput() {
    this.passingDataChange.emit(this.passingData);
  }
}
