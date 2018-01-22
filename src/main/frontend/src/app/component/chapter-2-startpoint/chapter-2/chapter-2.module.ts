import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter2HomeComponent } from './chapter-2-home/chapter-2-home.component';
import { Chapter2ProductComponent } from './chapter-2-product/chapter-2-product.component';
import {chapter2Routing} from "./chapter2-routes";
import { Chapter2ProductParamComponent } from './chapter-2-product-param/chapter-2-product-param.component';

@NgModule({
  imports: [
    CommonModule,
    chapter2Routing,
  ],
  declarations: [Chapter2HomeComponent, Chapter2ProductComponent, Chapter2ProductParamComponent]
})
export class Chapter2Module { }
