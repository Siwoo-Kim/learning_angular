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
  isReviewHidden:boolean = true;
  newRating:number = 0;
  newComment:string;
  constructor(route:ActivatedRoute,private productService:ProductService) {
    var productId:number = route.snapshot.params['productId'];
    this.productService.getProductById(productId).subscribe( data => this.product = data[0] );
    this.productService.getReviewsForProduct(this.product).subscribe(data =>  { this.reviews = data; console.log(data) });

  }

  ngOnInit() {
  }

  addReview(){
    let review = new Review(0,this.product.id,new Date(),'Anonymous',
      this.newRating,this.newComment);

    console.log(`Adding review ${JSON.stringify(review)}`);

    this.reviews = [...this.reviews,review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  private averageRating(reviews: Review[]) {
    let sum = reviews.reduce((avg,review)=> avg + review.rating, 0);
    return sum / reviews.length;
  }

  private resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
