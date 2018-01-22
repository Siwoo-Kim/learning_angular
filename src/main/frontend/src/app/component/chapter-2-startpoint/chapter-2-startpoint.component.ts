import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from "@angular/router";
import {Chapter2HomeComponent} from "./chapter-2/chapter-2-home/chapter-2-home.component";
import {Chapter2Child2Component} from "./chapter-2/chapter-2-child-2/chapter-2-child-2.component";
import {Chapter2ProductComponent} from "./chapter-2/chapter-2-product/chapter-2-product.component";
import {Chapter2ParentComponent} from "./chapter-2/chapter-2-parent/chapter-2-parent.component";
import {Chapter2ChildComponent} from "./chapter-2/chapter-2-child/chapter-2-child.component";
import {Chapter2ProductParamComponent} from "./chapter-2/chapter-2-product-param/chapter-2-product-param.component";

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
  code9:string;
  code10:string;
  code11:string;
  code12:string;
  code13:string;
  code14:string;


  constructor(private router:Router) {
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

    this.code8 = "\n" +
      "      <mat-card>\n" +
      "        <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"naviageToProduct()\" >Product</button>\n" +
      "      </mat-card>";

    this.code9 ="\n" +
      "  constructor(private router:Router) {}\n" +
      "  naviageToProduct(){\n" +
      "    this.router.navigate(['/chapter2/product']);\n" +
      "  } ";

    this.code10 = "\n" +
      "@Component({\n" +
      "  selector: 'app-chapter-2-product-param',\n" +
      "  template : '<h1 class=\"product\">Product Details for {{productId}}</h1>',\n" +
      "  styles : [' .product { background: cadetblue }']\n" +
      "})\n" +
      "export class Chapter2ProductParamComponent implements OnInit {\n" +
      "  productId:number;\n" +
      "  constructor(private activateRoute:ActivatedRoute) {\n" +
      "    this.productId = this.activateRoute.snapshot.params['id'];\n" +
      "  }\n" +
      "\n" +
      "  ngOnInit() {\n" +
      "  }\n" +
      "\n" +
      "}\n";

    this.code11 = "const chapter2Routes:Routes = [\n" +
      "  {path : 'chapter2/home', component :Chapter2HomeComponent},\n" +
      "  {path : 'chapter2/product', component :Chapter2ProductComponent},\n" +
      "  {path : 'chapter2/product/:id', component :Chapter2ProductParamComponent},\n // :id 로 패스 변수를 전달한다" +
      "\n" +
      "]\n" +
      "\n" +
      "export const chapter2Routing = RouterModule.forChild(chapter2Routes);";

    this.code12 = "const chapter2Routes:Routes = [\n" +
      "  {path : 'chapter2/home', component :Chapter2HomeComponent},\n" +
      "  {path : 'chapter2/product', component :Chapter2ProductComponent},\n" +
      "  {path : 'chapter2/product/:id', component :Chapter2ProductParamComponent},\n" +
      "  {\n" +
      "    path : 'chpater2/parent',component : Chapter2ParentComponent,\n" +
      "    children : [ //chapter2/parent에 대한 자식 라우팅을 설정한다 \n" +
      "      {path : 'child' , component : Chapter2ChildComponent},\n" +
      "      {path : 'child2/:name' , component : Chapter2Child2Component},\n" +
      "    ],\n" +
      "  },\n" +
      "\n" +
      "]\n";

    this.code13 = "<p>\n" +
      "  chapter-2-parent works!\n" +
      "</p>\n" +
      "<p><router-outlet></router-outlet></p>\n";
  }

  ngOnInit() {
  }

  naviageToProduct(){
    this.router.navigate(['/chapter2/product']);
  }

}
