import {AfterViewInit, Component, OnInit} from '@angular/core';
import {I18nSupportService} from "../../services/i18n-support.service";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit{


  userName:string = '';
  valid:boolean = true;

  constructor(public i18nSupportService:I18nSupportService) {
    this.welcomeMessage = this.i18nSupportService.getWelcomeMessageByCode('ko');
  }


  onChange(){
    console.log('NgOnChange Event is triggered');
    this.welcomeMessage = this.i18nSupportService.getWelcomeMessageByCode(this.userName);
  }

  //
  // getWelcomeMessage():string{
  //   return this.i18nSupportService.getWelcomeMessageByCode(this.userName);
  // }

  welcomeMessage:string = "";
  ngOnInit(): void {
    // this is better approach when you have serve and make a request to the server
    this.i18nSupportService.onChangeLanguageCode
      .debounceTime(200)
      .subscribe(() => { this.welcomeMessage = this.i18nSupportService.getWelcomeMessageByCode(this.userName); console.log(this.welcomeMessage) });
  }

}
