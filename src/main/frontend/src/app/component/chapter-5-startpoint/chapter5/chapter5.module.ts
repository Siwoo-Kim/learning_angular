import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter511Component } from './components/chapter5-1-1/chapter5-1-1.component';
import {MatCardModule, MatChipsModule} from "@angular/material";
import {Chapter512Component} from "./components/chapter5-1-2/chapter5-1-2.component";
import {Chapter513Component} from "./components/chapter5-1-3/chapter5-1-3.component";

const components =[Chapter511Component,Chapter512Component,Chapter513Component]

@NgModule({
  imports: [
    CommonModule,MatCardModule,MatChipsModule,
  ],
  declarations: components,
  exports : components,
})
export class Chapter5Module { }
