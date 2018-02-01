import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../model/category";
import {ProductService} from "../../../service/product.service";
import {positiveNumberValidator} from "../../validators/positive-number-validator";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories:Category[];
  formGroup:FormGroup;

  constructor(private productService:ProductService,formBuilder:FormBuilder) {

    this.productService.getAllCategories().subscribe(
      data => this.categories = data
    );

    this.formGroup = formBuilder.group({
      'title': [null, Validators.minLength(3)],
      'price': [null,positiveNumberValidator],
      'category': [-1,],
    });

  }

  onSearch(){
    if(this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

  ngOnInit() {
  }

}
