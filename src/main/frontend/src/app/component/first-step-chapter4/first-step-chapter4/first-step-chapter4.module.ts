import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example421Component } from './components/example-4-2-1/example-4-2-1.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatToolbarModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppCommonModule} from "../../common/app-common.module";
import {Example423Component} from "./components/example-4-2-3/example-4-2-3.component";

const components = [
  Example421Component,Example423Component
]

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,FormsModule,

    MatFormFieldModule,MatButtonModule,
    MatToolbarModule, MatRadioModule,
    MatFormFieldModule,MatInputModule,
  ],
  declarations: components,
  exports : components
})
export class FirstStepChapter4Module { }
