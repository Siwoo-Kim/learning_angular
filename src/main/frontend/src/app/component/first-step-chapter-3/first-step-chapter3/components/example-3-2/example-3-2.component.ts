import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-example-3-2',
  templateUrl: './example-3-2.component.html',
  styleUrls: ['./example-3-2.component.css']
})
export class Example32Component implements AfterViewInit{

  /*
    Learning about Angular Life cycle : AfterViewInit
   */

  userName:string = '';
  valid:boolean = false;
  private static WAIT_FOR_INPUT = 3000;

  onInputName(name:string){
    this.valid =  name.length > 0;
    console.log(this.valid)
  }

  constructor(private toastrManager:ToastsManager) {

  }

  //NgAfterViewInit will invoke after view rendering finished
  ngAfterViewInit(): void {

    const checkTimeoutForNameInput = () => {
      if(!this.valid) { this.toastrManager.warning('Enter your name, please ! :<')}
      if(this.valid) { this.toastrManager.info('Thanks for entering your name, :>')}
    }

    setTimeout(checkTimeoutForNameInput,Example32Component.WAIT_FOR_INPUT);
  }
}
