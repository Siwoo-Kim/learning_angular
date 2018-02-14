import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/common/home/home.component";
import {Chapter1StartpointComponent} from "./component/chapter-1-startpoint/chapter-1-startpoint.component";
import {ProjectStartpointComponent} from "./project/component/project-startpoint/project-startpoint.component";
import {Chapter2StartpointComponent} from "./component/chapter-2-startpoint/chapter-2-startpoint.component";
import {Chapter3StartpointComponent} from "./component/chapter-3-startpoint/chapter-3-startpoint.component";
import {Chapter4StartpointComponent} from "./component/chapter-4-startpoint/chapter-4-startpoint.component";
import {Chapter5StartpointComponent} from "./component/chapter-5-startpoint/chapter-5-startpoint.component";
import {Chapter6StartpointComponent} from "./component/chapter-6-startpoint/chapter-6-startpoint.component";
import {Chapter7StartpointComponent} from "./component/chapter-7-startpoint/chapter-7-startpoint.component";
import {FirstStepChapter3Component} from "./component/first-step-chapter-3/first-step-chapter-3.component";
import {NgModule} from "@angular/core";
import {FirstStepChapter4Component} from "./component/first-step-chapter4/first-step-chapter4.component";
import {buildPath} from "selenium-webdriver/http";
import {FirstStepChapter5Component} from "./component/first-step-chapter-5/first-step-chapter-5.component";
import {P2AppComponent} from "./project2/components/p2-app.component";
import {RecipeAppComponent} from "./project2/recipe-project/components/recipe-app.component";
import {FirstStepChapter6Component} from "./component/first-step-chapter-6/first-step-chapter-6.component";
import {FirstStepChapter7Component} from "./component/first-step-chapter-7/first-step-chapter-7.component";
import {FirstStepChapter8Component} from "./component/first-step-chapter-8/first-step-chapter-8.component";
import {MainComponent} from "./project3/components/main.component";

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'chapter1',component:Chapter1StartpointComponent},
  {path:'chapter2',component:Chapter2StartpointComponent},
  {path:'chapter3',component:Chapter3StartpointComponent},
  {path:'chapter4',component:Chapter4StartpointComponent},
  {path:'chapter5',component:Chapter5StartpointComponent},
  {path:'chapter6',component:Chapter6StartpointComponent},
  {path:'chapter7',component:Chapter7StartpointComponent},
   // This is reminder that  Later I need to make a child path below
  {path:'first-step/chapter3',component:FirstStepChapter3Component},
  {path:'first-step/chapter4',component:FirstStepChapter4Component},
  {path:'first-step/chapter5',component:FirstStepChapter5Component},
  {path:'first-step/chapter6',component:FirstStepChapter6Component},
  {path:'first-step/chapter7',component:FirstStepChapter7Component},
  {path:'first-step/chapter8',component:FirstStepChapter8Component},
  {path:'project2',component:P2AppComponent},
  {path:'project3',component:MainComponent},
  {path:'recipe',component:RecipeAppComponent},
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{}

