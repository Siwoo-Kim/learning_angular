import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  checkLists:string[];
  checkResult:boolean[] = [];
      //EventEmitter enable to send data to parent's component
  @Output() checkResultEmitter:EventEmitter<string[]> = new EventEmitter();

  constructor() {
    this.checkLists = [
      'check one',
      'check two',
      'check three',
      'check four',
    ];
    this.checkLists.forEach(() => this.checkResult.push(false));
  }

  ngOnInit() {
  }

  @Input()
  set deletedCheck(deleteCheck:string){

    this.checkLists.forEach( (isChecked,id)=>{
      if(isChecked && this.checkLists[id] === deleteCheck){
        this.checkResult[id] = false;
        this.onClickResult();
      }
    })
  }

  onClickResult() {
    //To hold checked elements
    let checkedLists = [];
                                        //forEach(element,index)
    this.checkResult.forEach( (isCheck, id) => {
      if(isCheck){
        checkedLists.push(this.checkLists[id]);
      }
    });

    console.log(checkedLists);
          //Emit event to parent component
    this.checkResultEmitter.emit(checkedLists);
  }
}
