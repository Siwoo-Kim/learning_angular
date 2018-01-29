import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

var components = [];

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  declarations: components,
  exports : components
})
export class Chapter6Module { }
