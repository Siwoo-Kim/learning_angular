import { Component, OnInit } from '@angular/core';
import {Chap3Product, Chap3ProductService} from "../../services/chap3-product.service";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Chap3Product;

  constructor(private myProductService:Chap3ProductService) {
    this.product = this.myProductService.getProduct();
    console.log(this.product);
  }

  ngOnInit() {
  }

}
