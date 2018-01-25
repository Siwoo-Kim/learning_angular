import {Component, Inject, Injectable, InjectionToken, NgModule, OnInit} from '@angular/core';
import {chap3ServerUrl} from "../../tokens/chap3-tokens";
import {Http} from "@angular/http";
import {Chap3Product} from "./chapter3/model/chap-3-product";
import {CommonModule} from "@angular/common";
import {Chap3ProductService} from "./chapter3/services/chap3-product.service";
import {MatCardModule, MatExpansionModule} from "@angular/material";
import {ProductComponent} from "./chapter3/components/product/product.component";


@Component({
  selector: 'app-chapter-3-startpoint',
  templateUrl: './chapter-3-startpoint.component.html',
  styleUrls: ['./chapter-3-startpoint.component.css'],
  })
export class Chapter3StartpointComponent implements OnInit {

  code1:string;
  code2:string;
  code3:string;
  code4:string;
  code5:string;
  code6:string;
  code7:string;
  code8:string;
  code9:string;
  code19:string;

  constructor() { }

  ngOnInit() {

    this.code1 = "\n" +
      "    const product = new Product();\n" +
      "    makePayment(product);\n //함수를 호출하기 위해 Product 오브젝트가 필요하다" +
      "    ";

    this.code2 = "\n" +
      "@Component({\n" +
      "  selector: 'app-chapter-3-startpoint',\n" +
      "  templateUrl: './chapter-3-startpoint.component.html',\n" +
      "  styleUrls: ['./chapter-3-startpoint.component.css'],\n" +
      "  providers : [ProductService]\n" +
      "})\n" +
      "export class Chapter3StartpointComponent implements OnInit {\n" +
      "\n" +
      "  constructor(private productService:ProductService) { }";

    this.code3 = "\n" +
      "@Component({\n" +
      "  selector: 'app-chapter-3-startpoint',\n" +
      "  templateUrl: './chapter-3-startpoint.component.html',\n" +
      "  styleUrls: ['./chapter-3-startpoint.component.css'],\n" +
      "  providers : [ProductService,{provide:Chapter3Service,useClass:Chapter3Service}]\n" +
      "}) // providers 에 provider를 등록한다";

    this.code4 = "@Component({\n" +
      "  selector: 'app-product',\n" +
      "  templateUrl: './product.component.html',\n" +
      "  styleUrls: ['./product.component.css']\n" +
      "})\n" +
      "export class ProductComponent implements OnInit {\n" +
      "  product:Chap3Product;\n" +
      "\n" +
      "  constructor(private myProductService:Chap3ProductService) {\n" +
      "    this.product = this.myProductService.getProduct();\n" +
      "    console.log(this.product);\n" +
      "  }\n" +
      "\n" +
      "  ngOnInit() {\n" +
      "  }\n" +
      "\n" +
      "}\n";

    this.code5 = "\n" +
      "\n" +
      "@Injectable()\n" +
      "export class Chap3ProductService {\n" +
      "\n" +
      "  products:Chap3Product[];\n" +
      "\n" +
      "  constructor(private http:Http) {\n" +
      "    this.http.get('/data/chap3_product.json').subscribe(data => console.log(data) );\n" +
      "  }\n" +
      "\n" +
      "  getProduct() :Chap3Product{\n" +
      "    return new Chap3Product(\"CocaCola\",\"Nice to drink\",3.2);\n" +
      "  }\n" +
      "\n" +
      "}";

    this.code6 = "\n" +
      "@Injectable()\n" +
      "export class Chap3ProductService {\n" +
      "  \n" +
      "  constructor(private http:Http, @Inject(chap3ServerUrl) private url) {\n" +
      "    this.http.get(url).subscribe(data => console.log(data) );\n" +
      "  }\n" +
      "\n" +
      "  getProduct() :Chap3Product{\n" +
      "    return new Chap3Product(\"CocaCola\",\"Nice to drink\",3.2);\n" +
      "  }\n" +
      "\n" +
      "}\n" +
      "\n";

    this.code7 = "\n" +
      "export const chap3ServerUrl = new InjectionToken('serverUrl');\n\n" +
      "token을 생성한다\n" +
      "@NgModule({\n" +
      "  imports: [\n" +
      "    CommonModule, HttpModule,\n" +
      "    MatCardModule, MatExpansionModule,\n" +
      "  ],\n" +
      "  declarations: [ProductComponent],\n" +
      "  providers : [Chap3ProductService,{provide:chap3ServerUrl,useValue : 'server.com'}],\n" +
      "  exports : [ProductComponent]\n" +
      "})\n" +
      "export class Chapter3Module { }\n";
  }

}
