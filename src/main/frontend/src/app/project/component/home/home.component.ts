import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Product[] = [];

  constructor(private productService:ProductService) {
  }

  ngOnInit() {

    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }

}
