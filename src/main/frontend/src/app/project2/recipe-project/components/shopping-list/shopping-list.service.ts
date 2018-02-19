import {EventEmitter, Injectable, Output} from '@angular/core';
import {Ingredient} from "../shared/Ingredient.model";

@Injectable()
export class ShoppingListService {
  shoppingListAdded = new EventEmitter<Ingredient[]>();
  private ingredients :Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice(); /*return copy of array*/
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.shoppingListAdded.emit(this.ingredients.slice()); /*return copy of array*/
  }

}
