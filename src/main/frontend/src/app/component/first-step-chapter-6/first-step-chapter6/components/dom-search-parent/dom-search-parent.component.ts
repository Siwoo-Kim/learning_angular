import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-dom-search-parent',
  templateUrl: './dom-search-parent.component.html',
  styleUrls: ['./dom-search-parent.component.css']
})
export class DomSearchParentComponent implements AfterViewInit{

  @ViewChild('greeting') greeting : ElementRef;
  @ViewChildren('greeting') greetings : QueryList<ElementRef>;

  constructor(public elementRef:ElementRef) {
    /* Getting Root element for the component through constructor */
    console.log(elementRef);
    /* ElementRef object wrap the Native Element with itself */
    console.log(elementRef.nativeElement);
    /* Search the dom element with local template variable and @ViewChild decorator */
    /*Notice that the console present the result as null because
      when constructor is invoked the rendering is not finished */
    console.log('=============In Constructor=============');
    console.log(this.greeting);
    console.log(this.greetings);

  }

  ngAfterViewInit(): void {
    console.log('=============In AfterViewInit=============');
    console.log(this.greeting);
    console.log(this.greetings);
    console.log(this.greeting.nativeElement);
    this.greetings.forEach( elemRef => console.log(elemRef.nativeElement) );

    this.listItems.map( elemRef => console.log(elemRef.nativeElement) );
  }

  items : { id : number, content : string }[] = [
    { id : 1 , content : 'content1'},
    { id : 2 , content : 'content2'},
    { id : 3 , content : 'content3'}
  ];

  @ViewChildren('listItems') listItems : QueryList<ElementRef>;



}
