import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {P2AppComponent} from "../p2-app.component";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
    /* select the dom element by local variable name */

  /* emit the custom event and send data to the parent component */
  @Output('onServerEmit') serverCreated
     : EventEmitter<{ serverName:string, serverContent:string }>
    = new EventEmitter();
  @Output('onBlueprintEmit') blueprintCreated
     : EventEmitter<{ serverName:string, serverContent:string }>
    = new EventEmitter();

  onAddServer(nameInput: HTMLInputElement){
    console.log(nameInput);
    console.log(nameInput.value);
    console.log(this.serverContentInput);

    /* accessing dom element in the template by declaring template local variable */
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName : nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

}
