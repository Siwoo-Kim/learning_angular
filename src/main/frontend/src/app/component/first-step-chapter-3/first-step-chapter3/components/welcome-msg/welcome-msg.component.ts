import {AfterViewInit, Component, OnInit} from '@angular/core';
import {I18nSupportService} from "../../services/i18n-support.service";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent {


  userName:string = '';
  valid:boolean = true;

  constructor(public i18nSupportService:I18nSupportService) { }


  onChange(){
    console.log('NgOnChange Event is triggered');
  }


  getWelcomeMessage():string{
    return this.i18nSupportService.getWelcomeMessageByCode(this.userName,'ko');
  }
}
