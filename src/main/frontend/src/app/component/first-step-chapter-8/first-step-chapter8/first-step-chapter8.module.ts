import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppCommonModule} from "../../common/app-common.module";
import {Example814Component} from "./components/example-8-1-4/example-8-1-4.component";
import {Example821Component} from "./components/example-8-2-1/example-8-2-1.component";
import {Example821ChildComponent} from "./components/example-8-2-1/example-8-2-1-child/example-8-2-1-child.component";
import {TemplateFormPracticeComponent} from "./components/template-form-practice/template-form-practice.component";
import {MaxNumValidator, MinNumValidator} from "./validators/custom-validator.directive";
import {TemplateFromValidatorPracticeComponent} from "./components/template-from-validator-practice/template-from-validator-practice.component";
import {ReactiveFormPracticeComponent} from "./components/reactive-form-practice/reactive-form-practice.component";

const components = [
  Example814Component,
  Example821Component,
  Example821ChildComponent,
  TemplateFormPracticeComponent,
  TemplateFromValidatorPracticeComponent,
  MaxNumValidator,
  MinNumValidator,
  ReactiveFormPracticeComponent,
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,

    MatToolbarModule, MatCheckboxModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
  declarations: components,
  exports: components,
})
export class FirstStepChapter8Module { }
