import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent implements AfterViewInit {

  @ViewChild('keyInput') myInput : ElementRef;

  ngAfterViewInit(): void {

    /* In the component keyInput element is wrapped in ElementRef Object */
    console.log(this.myInput.nativeElement);

  }

  logs : number[] = [];

  leaveKeyLog(event:KeyboardEvent, keyCode:number){
          /* KeyboardEvent holds the keyCode from input */
          /* keyCode 13 is Enter Key */
    if(event.keyCode === 13){
      this.logs.push(keyCode);
      (<HTMLInputElement>event.target).value = '';
    }
  }

}
