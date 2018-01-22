import {Component, NgModule, OnInit} from '@angular/core';
import {ProjectModule} from "../../project/project.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {
  MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {ProductService} from "../../service/product.service";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../../app.component";
import {routes} from "../../app.routes";
import {Chapter1StartpointComponent} from "../chapter-1-startpoint/chapter-1-startpoint.component";
import {FormsModule} from "@angular/forms";
import {NewLineToBreakerPipe} from "../../pipe/new-line-to-breaker.pipe";
import {HomeComponent} from "../common/home/home.component";
import {HttpModule} from "@angular/http";
import {ProjectStartpointComponent} from "../../project/component/project-startpoint/project-startpoint.component";
import {Chapter2HomeComponent} from "./chapter-2/chapter-2-home/chapter-2-home.component";
import {Chapter2ProductComponent} from "./chapter-2/chapter-2-product/chapter-2-product.component";

@Component({
  selector: 'app-chapter-2-startpoint',
  templateUrl: './chapter-2-startpoint.component.html',
  styleUrls: ['./chapter-2-startpoint.component.css']
})
export class Chapter2StartpointComponent implements OnInit {

  escapeHtml1:string;
  escapeHtml2:string;
  escapeHtml3:string;
  code4:string;
  code5:string;
  code6:string;
  code7:string;
  code8:string;

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

    this.escapeHtml3="\n" +
      "export const routes:Routes = [\n" +
      "  {path:'',component:HomeComponent},\n" +
      "  {path:'chapter1',component:Chapter1StartpointComponent},\n" +
      "  {path:'chapter2',component:Chapter2StartpointComponent},\n" +
      "  {path:'project',component:ProjectStartpointComponent}\n" +
      "]\n";

    this.code4 ="\n" +
      "@NgModule({\n" +
      "  declarations: [\n" +
      " .... \n"+
      "  ],\n" +
      "  imports: [\n" +
      "    /* Angular Module */\n" +
      "    BrowserModule,HttpModule,FormsModule,\n" +
      "    RouterModule.forRoot(routes), //라우터 모듈을 로드(Load)한다."

    this.code5 = "const chapter2Routes:Routes = [ \n//Routes 객체로 라우터를 설정한다\n" +
      "  {path : 'chapter2/home', component :Chapter2HomeComponent},\n" +
      "  {path : 'chapter2/product', component :Chapter2ProductComponent}\n" +
      "]\n" +
      "\n" +
      "export const chapter2Routing = RouterModule.forChild(chapter2Routes);\n" +
      "//RoutingModule 인자로 Routes 배열을 넘겨 컴포넌트와 URL 설정 정보를 넘긴다"

    this.code6 = "@NgModule({\n" +
      "  imports: [\n" +
      "    CommonModule,\n" +
      "    chapter2Routing, //Routing 모듈을 로드(Load)한다.\n" +
      "  ],\n" +
      "  declarations: [Chapter2HomeComponent, Chapter2ProductComponent]\n" +
      "})\n" +
      "export class Chapter2Module { }\n"

    this.code7 ="\n" +
      "        <p>\n" +
      "          <a [routerLink]=\"['/chapter2/home']\">Home</a>\n" +
      "          <a [routerLink]=\"['/chapter2/product']\">Product</a>\n" +
      "        </p>"
  }

  ngOnInit() {
  }

}
