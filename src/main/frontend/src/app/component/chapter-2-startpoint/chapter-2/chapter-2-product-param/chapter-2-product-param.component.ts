import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chapter-2-product-param',
  template : '' +
  '<h1 class="product">Product Details for {{productId}}</h1>' +
  '<button mat-raised-button color="primary" [routerLink]="[\'/chapter2\']">back</button>' +
  '',
  styles : [' .product { background: cadetblue }']
})
export class Chapter2ProductParamComponent implements OnInit {
  productId:number;
  constructor(private activateRoute:ActivatedRoute) {
    this.productId = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
