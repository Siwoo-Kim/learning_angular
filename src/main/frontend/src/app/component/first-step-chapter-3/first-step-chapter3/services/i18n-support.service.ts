import { Injectable } from '@angular/core';

@Injectable() //Injectable decorator is not necessary but when it needs dependency, it does
export class I18nSupportService {
  /*
  Service contains business logic in application
  Service can be used in the all components in the application
  */

  constructor() {


  }

  getWelcomeMessageByCode(userName:string,code:string):string{
    return `${welcomeMessage[code]}, ${userName}`;
  }

}

/*
  HardCoding the Welcome message
 */
var welcomeMessage = {
  'ko': '안녕하세요',
  'en': 'Hello',
  'jp': '初めまして',
  'fr': 'Bonjour'
};
