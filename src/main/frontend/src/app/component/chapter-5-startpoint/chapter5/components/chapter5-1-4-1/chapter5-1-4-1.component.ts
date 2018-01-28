import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../../../../../model/stock";

@Component({
  selector: 'app-chapter5-1-4-1',
  templateUrl: './chapter5-1-4-1.component.html',
  styleUrls: ['./chapter5-1-4-1.component.css']
})
export class Chapter5141Component implements OnInit {

  private message:string;
  private _stock:Stock;

  @Input() set stock(stock:Stock){
    if(stock && stock.bidPrice != undefined){
      this.message = `Placed order to buy 100 shares of ${stock.stockSymbol}
      at \$${stock.bidPrice.toFixed(2)}`;
    }
  }

  get stock() : Stock{
    return this._stock;
  }

  constructor() { }

  ngOnInit() {
  }

}
