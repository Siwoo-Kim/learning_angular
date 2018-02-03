import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example31Component } from './components/example-3-1/example-3-1.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ExampleTitleComponent} from "../../common/example-title/example-title.component";
import {AppCommonModule} from "../../common/app-common.module";

const components = [
  Example31Component ,
];

@NgModule({
  imports: [
    CommonModule, FormsModule,
    /* Angular Material */
    MatToolbarModule,MatCardModule,
    MatButtonModule,MatFormFieldModule,
    MatInputModule,

    /* AppModule */
    AppCommonModule,
  ],
  declarations: components,
  exports : components
})
export class FirstStepChapter3Module { }
