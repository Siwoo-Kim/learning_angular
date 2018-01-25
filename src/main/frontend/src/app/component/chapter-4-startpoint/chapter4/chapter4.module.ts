import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter41Component } from './components/chapter4-1/chapter4-1.component';
import { Chapter411Component } from './components/chapter4-1-1/chapter4-1-1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Chapter41Component, Chapter411Component],
  exports :[Chapter41Component]
})
export class Chapter4Module { }
