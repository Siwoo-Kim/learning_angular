import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-step-chapter-6',
  templateUrl: './first-step-chapter-6.component.html',
  styleUrls: ['./first-step-chapter-6.component.css']
})
export class FirstStepChapter6Component implements OnInit {
  checkResults:string[];
  deletedCheck:string;

  constructor() { }

  ngOnInit() {
  }

  onResultHandler(data:string[]) {
   this.checkResults = data;
  }


  onRemoveHandler(index: number) {
    this.deletedCheck = this.checkResults[index];
  }
}
