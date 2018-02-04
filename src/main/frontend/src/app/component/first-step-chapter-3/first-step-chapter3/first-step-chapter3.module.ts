import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example31Component } from './components/example-3-1/example-3-1.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ExampleTitleComponent} from "../../common/example-title/example-title.component";
import {AppCommonModule} from "../../common/app-common.module";
import {Example32Component} from "./components/example-3-2/example-3-2.component";
import {LangSelectorComponent} from "./components/lang-selector/lang-selector.component";
import {WelcomeMsgComponent} from "./components/welcome-msg/welcome-msg.component";
import {I18nSupportService} from "./services/i18n-support.service";

const components = [
  Example31Component , Example32Component,
  LangSelectorComponent, WelcomeMsgComponent
];

@NgModule({
  imports: [
    // FormsModule is imported for bi-directional data binding
    CommonModule, FormsModule,
    /* Angular Material */
    MatToolbarModule,MatCardModule,
    MatButtonModule,MatFormFieldModule,
    MatInputModule,

    /* AppModule */
    AppCommonModule,
  ],
  /*
      Provide services to all components in the module
      Injector will inject the service where it needs through constructor
  */
  providers: [I18nSupportService],
  declarations: components,
  exports : components
})
export class FirstStepChapter3Module { }
