import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import {Chap3ProductService} from "./services/chap3-product.service";
import {MatCardModule, MatExpansionModule} from "@angular/material";
import {HttpModule} from "@angular/http";
import {chap3ServerUrl} from "../../../tokens/chap3-tokens";

@NgModule({
  imports: [
    CommonModule, HttpModule,
    MatCardModule, MatExpansionModule,
  ],
  declarations: [ProductComponent],
  providers : [Chap3ProductService,{provide:chap3ServerUrl,useValue : 'server.com'}],
  exports : [ProductComponent]
})
export class Chapter3Module { }
