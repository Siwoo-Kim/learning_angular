import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountService} from "../services/account-service";

@Component({
  selector: 'app-project2',
  templateUrl: './p2-app.component.html',
  styles : [`
    h3 {
      color : dodgerblue;
    }
    .odd {
      color: red;
    }
  `],
  // encapsulation : ViewEncapsulation.None
})
export class P2AppComponent implements  OnInit{

/*  serverElements = [
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

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }

  numbers: number[] = [1,2,3,4,5,];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd:boolean = false;

  */

  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}){
    console.log(updateInfo);
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}

















