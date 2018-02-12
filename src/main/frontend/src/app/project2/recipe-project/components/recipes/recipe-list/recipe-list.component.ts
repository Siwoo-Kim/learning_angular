import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png'),
    new Recipe('Another Recipe', 'This is simply a test', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png'),
    new Recipe('The other Recipe', 'This is simply a test', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png'),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
