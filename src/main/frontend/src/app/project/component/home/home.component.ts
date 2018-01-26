import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Product[] = [];
  titleFilter:FormControl = new FormControl();
  filterCriteria:string;

  constructor(private productService:ProductService) {

    this.titleFilter.valueChanges
      .debounceTime(100)
      .subscribe(
        value => this.filterCriteria = value
      );
  }

  ngOnInit() {

    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }

}
