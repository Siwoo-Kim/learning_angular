import {Component, EventEmitter, OnInit} from '@angular/core';
import {I18nSupportService, Language} from "../../services/i18n-support.service";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  // languageCode:string = 'ko';  *changed to proper name languageCode -> selectedLanguageCode
  selectedLanguageCode:string = 'ko';

  languages:Language[];

  constructor(public i18nSupportService:I18nSupportService) {
    this.selectedLanguageCode = i18nSupportService.getLanguageByCode(this.selectedLanguageCode).code;
    this.languages = i18nSupportService.getAllLanguage();
    // languageCodes = Language_Code; To get a data , service is more better place to get from
    // * Because the data can be used other place as well
  }

  setLanguageCode(code:string){
    this.selectedLanguageCode = code;
    this.i18nSupportService.languageCode = code;

  }

  onClickLanguage(languageCode:string){
    this.selectedLanguageCode = languageCode;
    this.setLanguageCode(languageCode);
  }

  ngOnInit() {
  }

}
