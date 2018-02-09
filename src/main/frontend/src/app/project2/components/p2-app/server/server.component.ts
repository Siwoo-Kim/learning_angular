import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId:number = 10;
  _serverStatus:string = 'offline';

  get serverStatus():string{
    return this._serverStatus;
  }

}
