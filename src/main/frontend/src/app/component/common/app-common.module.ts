import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeComponent} from "./code/code.component";
import {ExampleTitleComponent} from "./example-title/example-title.component";
import {ChapterTitleComponent} from "./chapter-title/chapter-title.component";
import {HomeComponent} from "./home/home.component";
import {MatCardModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {routes} from "../../app.routes";

const components = [CodeComponent,ExampleTitleComponent,ChapterTitleComponent,HomeComponent];

@NgModule({
  imports: [
    CommonModule,

    /* Angular Material Modules */
    MatCardModule,MatToolbarModule,
    MatIconModule,RouterModule.forChild(routes),
  ],
  declarations: components,
  exports : components
})
export class AppCommonModule { }
