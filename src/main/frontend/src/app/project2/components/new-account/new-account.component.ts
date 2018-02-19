import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LoggingService } from "../../services/logging-service";
import {AccountService} from "../../services/account-service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,private accountService: AccountService){
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert("New Status: "+status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    /*this.loggingService.logStatusChange(accountStatus);*/
  }

}
