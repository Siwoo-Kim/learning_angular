import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter711Component } from './components/chapter7-1-1/chapter7-1-1.component';
import {HttpModule} from "@angular/http";
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule} from "@angular/material";
import {backendUrl} from "./tokens/tokens";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Chapter712Component} from "./components/chapter7-1-2/chapter7-1-2.component";

const components = [ Chapter711Component , Chapter712Component];



@NgModule({
  imports: [
    CommonModule,HttpModule,
    MatCardModule,MatInputModule,
    MatListModule,FormsModule,
    ReactiveFormsModule, MatButtonModule,
  ],
  providers : [{provide:backendUrl,useValue:'/server'}],
  declarations: components,
  exports: components
})
export class Chapter7Module { }
