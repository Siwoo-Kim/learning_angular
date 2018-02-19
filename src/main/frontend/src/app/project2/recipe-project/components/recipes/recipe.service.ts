import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe-list/recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png'),
    new Recipe('Another Recipe', 'This is simply a test', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png'),
    new Recipe('The other Recipe', 'This is simply a test', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png'),
  ];

  constructor() { }

  getRecipes(): Recipe[]{
    return this.recipes.slice(); /* return copy of array */
  }
}
