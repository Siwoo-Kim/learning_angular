import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.css']
})
export class CheckResultComponent   /* , AfterViewInit */{

  checkCount:number;
  // getting data from parent component by using Input decorator

  // @Input() checkedResults:string[];
  // Alternatively, you can use setter to catch the moment when the value is recieved
  // from parent component
  _checkedResults:string[];

  @Input()
  set checkedResults(checkedResults:string[]){
    if(!checkedResults) { return; }

    this._checkedResults = checkedResults;
    this.checkCount = checkedResults.length;
  }

  get checkedResults():string[] {
    return this._checkedResults;
  }

  constructor() {
    //    this.initCheck();
  }

  @Output() onRemoveCheckEmitter:EventEmitter<number> = new EventEmitter<number>();
  // Sending data (index of the array which I want to remove) to the parent component

  onRemoveCheck(id:number) {
    //Becuase we want to remove the result array, not original array
    //index of checkedResult is perfectly fine
    console.log(id);
    this.onRemoveCheckEmitter.emit(id);

  }


  /*

  ngAfterViewInit(): void {

    // using dom is anti-pattern which break the component's scope
    // const checkElems = document.querySelectorAll('mat-list-option');
    // console.log(checkElems);


  }
  */

  private initCheck() {
    this.checkCount = 0;
    this.checkedResults = [];
  }

  private colleckResult() {
    this.initCheck();
  }

}
