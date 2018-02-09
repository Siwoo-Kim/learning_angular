import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { RecipeAppComponent } from './components/recipe-app.component';
import {HeaderComponent} from "./components/header/header.component";
import {HttpModule} from "@angular/http";
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    FormsModule,HttpModule,

  ],
  declarations: [
    RecipeAppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ]
})
export class RecipeProjectModule { }
