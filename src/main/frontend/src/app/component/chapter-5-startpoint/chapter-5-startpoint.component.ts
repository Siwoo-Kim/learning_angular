import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {chapter5_code} from "../../metadata/chapter5-code";
import {Code} from "../../model/code";
import {IPriceQuote} from "./chapter5/components/chapter5-1-3/chapter5-1-3.component";
import {Stock} from "../../model/stock";
import {Chapter531Component} from "./chapter5/components/chapter-5-3-1/chapter-5-3-1.component";

@Component({
  selector: 'app-chapter-5-startpoint',
  templateUrl: './chapter-5-startpoint.component.html',
  styleUrls: ['./chapter-5-startpoint.component.css']
})
export class Chapter5StartpointComponent implements OnInit ,AfterViewInit{

  codes:Code[] = chapter5_code;

  constructor() { }

  ngOnInit() {
  }

  menu:string = "Aroma Latte";

  onMenuHandler( { target }){
    this.menu = target.value;
  }

  quantity:number;

  stockSymbol:string;
  price:number;

  onPriceQuoteHandler( event :IPriceQuote){

    this.stockSymbol = event.stockSymbol;
    this.price = event.lastPrice;

  }

  stock:Stock;

  onBuyHandler(stock : Stock){
    this.stock = stock;
  }

  user:{ name :string } = {name : 'SiWoo'};
  greeting = "Hello Angular";

  @ViewChild('child1') firstChild:Chapter531Component;
  @ViewChild('child2') secondChild:Chapter531Component;

  ngAfterViewInit(): void {
    this.firstChild.greeting('Child 1');
  }


}
