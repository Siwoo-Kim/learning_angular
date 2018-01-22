import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter2HomeComponent } from './chapter-2-home/chapter-2-home.component';
import { Chapter2ProductComponent } from './chapter-2-product/chapter-2-product.component';
import {chapter2Routing} from "./chapter2-routes";
import { Chapter2ProductParamComponent } from './chapter-2-product-param/chapter-2-product-param.component';
import { Chapter2ParentComponent } from './chapter-2-parent/chapter-2-parent.component';
import { Chapter2ChildComponent } from './chapter-2-child/chapter-2-child.component';
import { Chapter2Child2Component } from './chapter-2-child-2/chapter-2-child-2.component';

@NgModule({
  imports: [
    CommonModule,
    chapter2Routing,
  ],
  declarations: [Chapter2HomeComponent, Chapter2ProductComponent, Chapter2ProductParamComponent, Chapter2ParentComponent, Chapter2ChildComponent, Chapter2Child2Component]
})
export class Chapter2Module { }
