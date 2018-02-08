import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example421Component } from './components/example-4-2-1/example-4-2-1.component';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule,} from "@angular/forms";
import {AppCommonModule} from "../../common/app-common.module";
import {Example423Component} from "./components/example-4-2-3/example-4-2-3.component";
import {Example424Component} from "./components/example-4-2-4/example-4-2-4.component";
import {SimpleCounterComponent} from "./components/simple-counter/simple-counter.component";
import {Example425Component} from "./components/example-4-2-5/example-4-2-5.component";
import {Example413Component} from "./components/example-4-13/example-4-13.component";
import {Example414Component} from "./components/example-4-14/example-4-14.component";

const components = [
  Example421Component,Example423Component,
  Example424Component,SimpleCounterComponent,
  Example413Component, Example414Component
]

@NgModule({
  imports: [
    AppCommonModule,ReactiveFormsModule,
    CommonModule,FormsModule,

    MatFormFieldModule,MatButtonModule,
    MatToolbarModule, MatRadioModule,
    MatFormFieldModule,MatInputModule,
    MatListModule
  ],
  declarations: components,
  exports : components
})
export class FirstStepChapter4Module { }
