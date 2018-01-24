import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";

class Product{

}

@Component({
  selector: 'app-chapter-3-startpoint',
  templateUrl: './chapter-3-startpoint.component.html',
  styleUrls: ['./chapter-3-startpoint.component.css'],
  providers : [ProductService]
})
export class Chapter3StartpointComponent implements OnInit {

  code1:string;
  code2:string;

  constructor(private productService:ProductService) { }

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
  }

}
