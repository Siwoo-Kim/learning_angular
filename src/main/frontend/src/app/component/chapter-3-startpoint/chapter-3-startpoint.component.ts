import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Chapter3Service} from "../../service/chapter3.service";
import {Chap3Product} from "./chapter3/services/chap3-product.service";

class Product{

}

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
      "}\n"
  }

}
