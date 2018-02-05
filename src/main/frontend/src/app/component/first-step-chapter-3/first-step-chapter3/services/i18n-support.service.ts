import {EventEmitter, Injectable} from '@angular/core';
import {Language_Code} from "../../../../metadata/language_code";

// Modeling the Language Data by interface
// which is more safe approach
export interface Language{
  code:string;
  name:string;
  flagImgName:string;
  msg:string;
}

@Injectable() //Injectable decorator is not necessary but when it needs dependency, it does
export class I18nSupportService {
  /*
  Service contains business logic in application
  Service can be used in the all components in the application
  */

  // properties in the service can also be used in multiple place.
  // Service is an aisel for sending data between components

//  private langCode = 'ko';

  private selectedLanguage:Language;
  private Languages:Language[];

  constructor() {
    this.Languages = Language_Code;
    this.selectedLanguage = this.getLanguageByCode('ko');
  }

  getWelcomeMessageByCode(userName:string):string{
    //  return `${welcomeMessage[code]}, ${userName}`;
    //  return `${welcomeMessage[this.langCode]}, ${userName}`;
    return `${this.selectedLanguage.msg}, ${userName}`;
  }

  // get languageCode(){
  //   return this.langCode;
  // }

  //You can make custom event if you like by using EventEmitter object
  // onChangeLanguageCode:EventEmitter<string> = new EventEmitter<string>();
  onChangeLanguageCode:EventEmitter<Language> = new EventEmitter<Language>();

  set languageCode(code:string){
     // this.langCode = code;
    this.selectedLanguage = this.getLanguageByCode(code);
    this.onChangeLanguageCode.emit(this.selectedLanguage);

  }

  getLanguageByCode(code:string):Language{
    return this.Languages.find(language => language.code == code);
  }

  getAllLanguage() :Language[] {
    return this.Languages;
  }
}

/*
  HardCoding the Welcome message
 */
var welcomeMessage = {
  'ko': '안녕하세요',
  'en': 'Hello',
  'jp': '初めまして',
  'fr': 'Bonjour',
  'ch': 'NiHao'
};
