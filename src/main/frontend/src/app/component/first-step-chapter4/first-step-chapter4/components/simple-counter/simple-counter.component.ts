import { Component, OnInit } from '@angular/core';
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.css']
})
export class SimpleCounterComponent implements OnInit {

  constructor(private toastsManager:ToastsManager) { }

  ngOnInit() {
  }

  currentValue = 0;
  manualValue = 0;
  static LIMIT_VALUE = 100;

  getColor(){
    // Background is determined by the currentValue
    if(this.currentValue > 0 ) return 'green';
    else if(this.currentValue < 0) return 'red';
    else return 'grey';
  };

  increment(){
    const afterChangeValue = this.currentValue + 1;
    if(this.validateValue(afterChangeValue)){
      this.currentValue = afterChangeValue;
    }
  };

  decrement(){
    const afterChangeValue = this.currentValue - 1;
    if(this.validateValue(afterChangeValue)){
      this.currentValue = afterChangeValue;
    }};

  setValueManually(){
            // Bi-Directionally binding property
    if(this.validateValue(this.manualValue)){
      this.currentValue = this.manualValue;
    }else {
      this.manualValue = 0;
    }
  };

  private validateValue(afterChangeValue: number) {
    if(Math.abs(afterChangeValue) < SimpleCounterComponent.LIMIT_VALUE){
      return true;
    }

    this.toastsManager.warning(`
      ${afterChangeValue > 0 ? 'Increment' : 'Decrement'} operation is declined
      `
    );
    return false;
  }
}
