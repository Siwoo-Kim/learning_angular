import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter4-1-2',
  templateUrl: './chapter4-1-2.component.html',
  styleUrls: ['./chapter4-1-2.component.css']
})
export class Chapter412Component implements OnInit {
  greeting:string = 'Greeting Angular';

  onInputHandler(event:Event){
    let inputElement:HTMLInputElement = <HTMLInputElement> event.target;

    console.log('HTMLInputElement property : '+inputElement.value);
    console.log('HTMLInputElement attribute : '+inputElement.getAttribute('value'));
    console.log('Component property : '+this.greeting);
  }
  constructor() { }

  ngOnInit() {
  }

}
