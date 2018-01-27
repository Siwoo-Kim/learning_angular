import {Component, Input, OnInit} from '@angular/core';
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-chapter5-1-2',
  templateUrl: './chapter5-1-2.component.html',
  styleUrls: ['./chapter5-1-2.component.css']
})
export class Chapter512Component implements OnInit {
  stockQuantity:number;
  _requestQuantity:number;
  isOrdered:boolean;


  @Input()
  set requestQuantity(quantity:number){
    if(quantity == null) { return; }

    this._requestQuantity = quantity;

    if(this.stockQuantity < this._requestQuantity){
      this.isOrdered = false;
      this.toastr.warning("Order Request is rejected");
      return;
    }

    this.isOrdered = true;
    this.toastr.info("Order is successful");
  }

  get requestQuantity(){
    return this._requestQuantity;
  }

  constructor(private toastr:ToastsManager) {
    this.stockQuantity = 10;
  }

  ngOnInit() {
  }


}
