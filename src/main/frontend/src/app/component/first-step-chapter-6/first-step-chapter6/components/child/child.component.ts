import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  words:string = '';
  getWords(words:string){
    this.words = words;
  }

  myOpenState : string = 'let it be';
  private _internalState : string = 'not authorized';
    /* parent cannot fetch the private property in child through ViewChild */

}
