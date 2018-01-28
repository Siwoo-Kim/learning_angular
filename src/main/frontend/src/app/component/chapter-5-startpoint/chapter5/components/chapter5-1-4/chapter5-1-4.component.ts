import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Stock} from "../../../../../model/stock";

@Component({
  selector: 'app-chapter5-1-4',
  templateUrl: './chapter5-1-4.component.html',
  styleUrls: ['./chapter5-1-4.component.css']
})
export class Chapter514Component implements OnInit {
  @Output() buy:EventEmitter<Stock> = new EventEmitter<Stock>();
  stockSymbol:string = 'IBM';
  lastPrice:number;

  constructor() {
    setInterval(()=>{
      this.lastPrice = 100 * Math.random();
    },2000);
  }


  ngOnInit() {
  }

  buyStocks(){
    this.buy.emit({ bidPrice : this.lastPrice , stockSymbol : this.stockSymbol });
  }

}
