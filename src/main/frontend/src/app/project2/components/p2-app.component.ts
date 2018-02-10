import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './p2-app.component.html',
  styles : [`
    h3 {
      color : dodgerblue;
    }
  `]
})
export class P2AppComponent {
  serverElements = [
    {
      type : 'server',
      name : 'TestServer',
      content : 'Just a test! '
    },
    ];


    onServerAdded(serverData : {serverName:string,serverContent:string}){
      this.serverElements.push({
        type : 'server',
        name : serverData.serverName,
        content : serverData.serverContent
      });
    }

    onBlueprintAdded(blueprintData : {serverName:string,serverContent:string}){
      this.serverElements.push({
        type : 'blueprint',
        name : blueprintData.serverName,
        content : blueprintData.serverContent
      });
    }

}
