import { Component, OnInit } from '@angular/core';
import {P2AppComponent} from "../p2-app.component";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  constructor() { }

  // onAddServer(){
  //   this.serverElements.push({
  //     type : 'server',
  //     name : this.newServerName,
  //     content : this.newServerContent
  //   });
  // }
  //
  // onAddBlueprint(){
  //   this.serverElements.push({
  //     type : 'blueprint',
  //     name : this.newServerName,
  //     content : this.newServerContent
  //   });
  // }

}
