import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {P2AppComponent} from "../p2-app.component";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
    /* select the dom element by local variable name */

  /* emit the custom event and send data to the parent component */
  @Output('onServerEmit') serverCreated
     : EventEmitter<{ serverName: string, serverContent: string }>
    = new EventEmitter();
  @Output('onBlueprintEmit') blueprintCreated
     : EventEmitter<{ serverName: string, serverContent: string }>
    = new EventEmitter();

  onAddServer(nameInput: HTMLInputElement){
    console.log(nameInput);
    console.log(nameInput.value);
    console.log(this.serverContentInput);

    /* accessing dom element in the template by declaring template local variable */
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  /* One hook of 8 Lifecycle for component */
  /*
    1. ngOnChanges called after a bound input (@input) property changes
    2. ngOnInit called once the component is initialized
    3. ngDoCheck called during every change detection run
    4. ngAfterContentInit called after content has been projected into view
    5. ngAfterContentChecked
    6. ngAfterViewInit called after the component's view has bean initialized
    7. ngAfterViewChecked
    8. ngOnDestroy called once the component is about to be destroyed
  */

  ngOnInit(): void {
  }

}
