import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-project-startpoint',
  templateUrl: './project-startpoint.component.html',
  styleUrls: ['./project-startpoint.component.css']
})
export class ProjectStartpointComponent implements OnInit {
  products: Product[];

  constructor(private productService:ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
          value => {this.products = value;},
          error => { console.log(`error occured : ${error}`)});
  }


}
