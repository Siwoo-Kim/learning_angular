import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Chapter611Component} from "./components/chapter6-1-1/chapter6-1-1.component";
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";
import {Chapter612Component} from "./components/chapter6-1-2/chapter6-1-2.component";
import {Chapter613Component} from "./components/chapter6-1-3/chapter6-1-3.component";
import {Chapter614Component} from "./components/chapter6-1-4/chapter6-1-4.component";
import {Chapter615Component} from "./components/chapter6-1-5/chapter6-1-5.component";
import {Chapter616Component} from "./components/chapter6-1-6/chapter6-1-6.component";
import {Chapter617Component} from "./components/chapter6-1-7/chapter6-1-7.component";

var components = [
  Chapter611Component,Chapter612Component,
  Chapter613Component,Chapter614Component,
  Chapter615Component,Chapter616Component,
  Chapter617Component
];

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
    ,MatCardModule,MatInputModule,MatButtonModule,
  ],
  declarations: components,
  exports : components
})
export class Chapter6Module { }
