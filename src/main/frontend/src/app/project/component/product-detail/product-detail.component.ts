import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../model/product";
import {Review} from "../../../model/review";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  reviews: Review[];

  constructor(route:ActivatedRoute,private productService:ProductService) {
    var productId:number = route.snapshot.params['productId'];
    this.productService.getProductById(productId).subscribe( data => this.product = data[0] );
    this.productService.getReviewsForProduct(this.product).subscribe(data =>  { this.reviews = data; console.log(data) });

  }

  ngOnInit() {
  }

}
