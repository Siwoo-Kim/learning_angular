import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter41Component } from './components/chapter4-1/chapter4-1.component';
import { Chapter411Component } from './components/chapter4-1-1/chapter4-1-1.component';
import {Chapter412Component} from "./components/chapter4-1-2/chapter4-1-2.component";
import {MatCardModule, MatInputModule, MatRadioModule} from "@angular/material";
import { Chapter42Component } from './components/chapter-4-2/chapter-4-2.component';

@NgModule({
  imports: [
    CommonModule,MatInputModule,MatCardModule,MatRadioModule
  ],
  declarations: [Chapter41Component, Chapter411Component, Chapter412Component, Chapter42Component],
  exports :[Chapter41Component, Chapter411Component,Chapter412Component,Chapter42Component]
})
export class Chapter4Module { }
