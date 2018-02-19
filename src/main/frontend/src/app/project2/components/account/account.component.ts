import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggingService} from "../../services/logging-service";
import {AccountService} from "../../services/account-service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private logginService: LoggingService,
              private accountService: AccountService){}

  onSetTo(accountStatus: string){
    /*
    this.statusChanged.emit({
      id: this.id,
      newStatus: accountStatus
    });
    */
    this.accountService.updateStatus(this.id,accountStatus);
    this.accountService.statusUpdated.emit(accountStatus);
    /*this.logginService.logStatusChange(accountStatus);*/
  }

}
