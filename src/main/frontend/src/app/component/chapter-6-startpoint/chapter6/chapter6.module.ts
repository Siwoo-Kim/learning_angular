import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Chapter611Component} from "./components/chapter6-1-1/chapter6-1-1.component";
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";
import {Chapter612Component} from "./components/chapter6-1-2/chapter6-1-2.component";

var components = [Chapter611Component,Chapter612Component];

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
    ,MatCardModule,MatInputModule,MatButtonModule,
  ],
  declarations: components,
  exports : components
})
export class Chapter6Module { }
