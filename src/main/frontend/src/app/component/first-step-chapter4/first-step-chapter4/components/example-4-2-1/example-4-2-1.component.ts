import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-example-4-2-1',
  templateUrl: './example-4-2-1.component.html',
  styleUrls: ['./example-4-2-1.component.css']
})
export class Example421Component implements OnInit,AfterViewInit {

  ngAfterViewInit(): void {

  }

  constructor() {
  }


  //Procedural Programming
  //Making the logic through procedural sequence
  isConfirmed1 = document.querySelector("#agree-checkbox");
  isConfirmed2 = document.querySelector("#disagree-checkbox");
  toogle:boolean = false;

  ngOnInit() {

    const toogling = (state:boolean) => { this.toogle  = state; }

    document.querySelector("#agree-checkbox")
      .addEventListener('click',function(){toogling(true)});

    document.querySelector("#disagree-checkbox")
      .addEventListener('click',function(){toogling(false)});

  }

}
