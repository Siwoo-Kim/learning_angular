import { Component, OnInit } from '@angular/core';
import {I18nSupportService} from "../../services/i18n-support.service";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {

  languageCode:string;

  constructor(public i18nSupportService:I18nSupportService) {
    this.languageCode = 'ko';
  }


  onClickLanguage(languageCode:string){
    this.languageCode = languageCode;
  }

  ngOnInit() {
  }

}
