import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface IPriceQuote{
  stockSymbol : string;
  lastPrice : number;
}

@Component({
  selector: 'app-chapter5-1-3',
  templateUrl: './chapter5-1-3.component.html',
  styleUrls: ['./chapter5-1-3.component.css']
})
export class Chapter513Component implements OnInit {
  @Output() lastPrice : EventEmitter<IPriceQuote> = new EventEmitter<IPriceQuote>();
  stockSymbol : string = 'IBM';
  price:number;

  constructor() {
    setInterval(() => {
      let priceQuote : IPriceQuote = {
        stockSymbol : this.stockSymbol,
        lastPrice : 100 * Math.random()
      };

      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    },1000);
  }

  ngOnInit() {
  }

}
