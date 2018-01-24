import { Injectable } from '@angular/core';

export class Chap3Product {
  constructor(public name:string,public description:string,public price:number){}
}

@Injectable()
export class Chap3ProductService {

  constructor() { }

  getProduct() :Chap3Product{
    return new Chap3Product("CocaCola","Nice to drink",3.2);
  }

}
