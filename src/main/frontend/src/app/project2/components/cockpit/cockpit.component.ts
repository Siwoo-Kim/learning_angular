import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {P2AppComponent} from "../p2-app.component";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';
  @Output('onServerEmit') serverCreated
     : EventEmitter<{ serverName:string, serverContent:string }>
    = new EventEmitter();
  @Output('onBlueprintEmit') blueprintCreated
     : EventEmitter<{ serverName:string, serverContent:string }>
    = new EventEmitter();

  onAddServer(){
    this.serverCreated.emit({
      serverName : this.newServerName,
      serverContent : this.newServerContent
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName : this.newServerName,
      serverContent : this.newServerContent
    });
  }

}
