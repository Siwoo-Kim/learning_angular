import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule,
  MatRadioModule,
  MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import { Chapter1StartpointComponent } from './component/chapter-1-startpoint/chapter-1-startpoint.component';
import { NewLineToBreakerPipe } from './pipe/new-line-to-breaker.pipe';
import {FormsModule} from "@angular/forms";
import {ProjectModule} from "./project/project.module";
import {ProductService} from "./service/product.service";
import { Chapter2StartpointComponent } from './component/chapter-2-startpoint/chapter-2-startpoint.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Chapter2Module} from "./component/chapter-2-startpoint/chapter-2/chapter-2.module";
import { HelloWorldComponent } from './component/chapter-1-startpoint/components/hello-world/hello-world.component';
import { Chapter3StartpointComponent } from './component/chapter-3-startpoint/chapter-3-startpoint.component';
import {Chapter3Module} from "./component/chapter-3-startpoint/chapter3/chapter3.module";

import { Chapter4StartpointComponent } from './component/chapter-4-startpoint/chapter-4-startpoint.component';

import {Chapter4Module} from "./component/chapter-4-startpoint/chapter4/chapter4.module";
import { Chapter5StartpointComponent } from './component/chapter-5-startpoint/chapter-5-startpoint.component';
import {Chapter5Module} from "./component/chapter-5-startpoint/chapter5/chapter5.module";
import {ToastModule} from "ng2-toastr";
import { Chapter6StartpointComponent } from './component/chapter-6-startpoint/chapter-6-startpoint.component';
import {Chapter6Module} from "./component/chapter-6-startpoint/chapter6/chapter6.module";
import { Chapter7StartpointComponent } from './component/chapter-7-startpoint/chapter-7-startpoint.component';
import { FirstStepChapter3Component } from './component/first-step-chapter-3/first-step-chapter-3.component';
import {Chapter7Module} from "./component/chapter-7-startpoint/chapter7/chapter7.module";
import {FirstStepChapter3Module} from "./component/first-step-chapter-3/first-step-chapter3/first-step-chapter3.module";
import { ExampleTitleComponent } from './component/common/example-title/example-title.component';
import {AppCommonModule} from "./component/common/app-common.module";
import { FirstStepChapter4Component } from './component/first-step-chapter4/first-step-chapter4.component';
import {FirstStepChapter4Module} from "./component/first-step-chapter4/first-step-chapter4/first-step-chapter4.module";



@NgModule({
  declarations: [
    AppComponent,
    Chapter1StartpointComponent,
    NewLineToBreakerPipe,
    Chapter2StartpointComponent,
    HelloWorldComponent,
    Chapter3StartpointComponent,
    Chapter4StartpointComponent,
    Chapter5StartpointComponent,
    Chapter6StartpointComponent,
    Chapter7StartpointComponent,
    FirstStepChapter3Component,
    FirstStepChapter4Component,
  ],
  imports: [
    /* 3rd Module */
    ToastModule.forRoot(),
    /* Angular Module */
    BrowserModule,HttpModule,FormsModule,
    BrowserAnimationsModule,
    /* Angular Material & Animation Modeul */
    MatToolbarModule,MatSnackBarModule,MatCardModule,
    MatInputModule,MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,MatIconModule,
    MatExpansionModule,MatChipsModule, MatIconModule,


    /* App Module */
    AppCommonModule,
    ProjectModule, Chapter2Module,
    AppRoutingModule,
    Chapter3Module,Chapter4Module,
    Chapter5Module,Chapter6Module,
    Chapter7Module,

    /* 앵귤러 첫걸음4 실습 컴포넌트 */
    FirstStepChapter3Module,FirstStepChapter4Module
  ],
  exports : [ExampleTitleComponent],
  providers: [ProductService, {provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
