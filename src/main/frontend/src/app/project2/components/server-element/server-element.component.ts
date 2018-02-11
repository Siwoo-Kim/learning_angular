import {
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnDestroy, OnInit, AfterViewInit{



  @ViewChild('heading') header: ElementRef;

  ngOnDestroy(): void {
    console.log('NgOnDestroy called!');
  }

  ngOnInit(): void {
    console.log('NgOnInit called!');
    console.log("Text content: "+this.header.nativeElement.value.textContent);
  }

  ngAfterViewInit(): void {
    console.log('NgAfterViewIniebe called!');
    console.log("Text content: "+this.header.nativeElement.value.textContent);
  }
  /* You can specify alias fo the element from parent */
  @Input('srvElement') element: {
    type : string,
    name : string ,
    content : string,
  } ;
  @Input() name: string;



}
