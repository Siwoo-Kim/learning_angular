import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{ color: white; }
    p { margin-top : 7px; }
  `]
})
export class ServerComponent {
  serverId:number = 10;
  _serverStatus:string = 'offline';

  constructor(){
                     // random number from 0 to 1
    this._serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  get serverStatus():string{
    return this._serverStatus;
  }

  getColor(){
    return this._serverStatus === 'online' ? 'green' : 'red'
  }


}
