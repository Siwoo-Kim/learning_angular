import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Chap3Product} from "../model/chap-3-product";
import {chap3ServerUrl} from "../../../../tokens/chap3-tokens";

@Injectable()
export class Chap3ProductService {

  constructor(private http:Http, @Inject(chap3ServerUrl) private url) {
    this.http.get(url).subscribe(data => console.log(data) );
  }

  getProduct() :Chap3Product{
    return new Chap3Product("CocaCola","Nice to drink",3.2);
  }

}

