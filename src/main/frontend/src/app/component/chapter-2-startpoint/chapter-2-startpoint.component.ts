import {Component, NgModule, OnInit} from '@angular/core';
import {ProjectModule} from "../../project/project.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {
  MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {ProductService} from "../../service/product.service";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../../app.component";
import {routes} from "../../app.routes";
import {Chapter1StartpointComponent} from "../chapter-1-startpoint/chapter-1-startpoint.component";
import {FormsModule} from "@angular/forms";
import {NewLineToBreakerPipe} from "../../pipe/new-line-to-breaker.pipe";
import {HomeComponent} from "../common/home/home.component";
import {HttpModule} from "@angular/http";

@Component({
  selector: 'app-chapter-2-startpoint',
  templateUrl: './chapter-2-startpoint.component.html',
  styleUrls: ['./chapter-2-startpoint.component.css']
})
export class Chapter2StartpointComponent implements OnInit {

  escapeHtml1:string;
  escapeHtml2:string;

  constructor() {
    this.escapeHtml1 = "\n" +
      "        <body>\n" +
      "        <header></header> //Not changed content \n" +
      "            <main></main> //Changed content\n" +
      "        <footer></footer> //Not changed content\n" +
      "        </body>"

    this.escapeHtml2 ="@NgModule({\n" +
      "  declarations: [\n" +
      "    AppComponent,\n" +
      "    HomeComponent,\n" +
      "    Chapter1StartpointComponent,\n" +
      "    NewLineToBreakerPipe,\n" +
      "    Chapter2StartpointComponent,\n" +
      "  ],\n" +
      "  imports: [\n....\n" +
      "  ],\n" +
      "  providers: [ProductService, \n{provide:LocationStrategy,useClass:HashLocationStrategy}], //위치 정책을 변경한다 \n " +
      "  bootstrap: [AppComponent]\n" +
      "})\n" +
      "export class AppModule { }\n";
  }

  ngOnInit() {
  }

}
