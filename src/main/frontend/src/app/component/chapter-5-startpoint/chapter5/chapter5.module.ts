import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter511Component } from './components/chapter5-1-1/chapter5-1-1.component';
import {MatButtonModule, MatCardModule, MatChipsModule} from "@angular/material";
import {Chapter512Component} from "./components/chapter5-1-2/chapter5-1-2.component";
import {Chapter513Component} from "./components/chapter5-1-3/chapter5-1-3.component";
import {Chapter514Component} from "./components/chapter5-1-4/chapter5-1-4.component";
import {Chapter5141Component} from "./components/chapter5-1-4-1/chapter5-1-4-1.component";
import {Chapter515Component} from "./components/chapter5-1-5/chapter5-1-5.component";
import {Chapter5151Component} from "./components/chapter5-1-5-1/chapter5-1-5-1.component";

const components =[
  Chapter511Component,Chapter512Component, Chapter513Component,
  Chapter514Component,Chapter5141Component, Chapter515Component,
  Chapter5151Component
]

@NgModule({
  imports: [
    CommonModule,MatCardModule,MatChipsModule,MatButtonModule
  ],
  declarations: components,
  exports : components,
})
export class Chapter5Module { }
