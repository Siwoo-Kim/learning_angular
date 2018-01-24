import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import {Chap3ProductService} from "./services/chap3-product.service";
import {MatCardModule, MatExpansionModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    MatCardModule, MatExpansionModule,
  ],
  declarations: [ProductComponent],
  providers : [Chap3ProductService],
  exports : [ProductComponent]
})
export class Chapter3Module { }
