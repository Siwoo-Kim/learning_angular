import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-app',
  templateUrl: './recipe-app.component.html',
  styleUrls: ['./recipe-app.component.css']
})
export class RecipeAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadedFeature:string = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
