import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeComponent} from "./code/code.component";
import {ExampleTitleComponent} from "./example-title/example-title.component";
import {ChapterTitleComponent} from "./chapter-title/chapter-title.component";
import {HomeComponent} from "./home/home.component";
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatRadioModule, MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app.routes";

const components = [
  CodeComponent,ExampleTitleComponent,
  ChapterTitleComponent,HomeComponent,
];

@NgModule({
  imports: [
    CommonModule,

    /* Angular Material Modules */
    MatCardModule,MatToolbarModule,
    MatIconModule,AppRoutingModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,

  ],
  declarations: components,
  exports : components
})
export class AppCommonModule { }
