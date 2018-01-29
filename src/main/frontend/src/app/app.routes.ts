import {Routes} from "@angular/router";
import {HomeComponent} from "./component/common/home/home.component";
import {Chapter1StartpointComponent} from "./component/chapter-1-startpoint/chapter-1-startpoint.component";
import {ProjectStartpointComponent} from "./project/component/project-startpoint/project-startpoint.component";
import {Chapter2StartpointComponent} from "./component/chapter-2-startpoint/chapter-2-startpoint.component";
import {Chapter3StartpointComponent} from "./component/chapter-3-startpoint/chapter-3-startpoint.component";
import {Chapter4StartpointComponent} from "./component/chapter-4-startpoint/chapter-4-startpoint.component";
import {Chapter5StartpointComponent} from "./component/chapter-5-startpoint/chapter-5-startpoint.component";
import {Chapter6StartpointComponent} from "./component/chapter-6-startpoint/chapter-6-startpoint.component";

export const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'chapter1',component:Chapter1StartpointComponent},
  {path:'chapter2',component:Chapter2StartpointComponent},
  {path:'chapter3',component:Chapter3StartpointComponent},
  {path:'chapter4',component:Chapter4StartpointComponent},
  {path:'chapter5',component:Chapter5StartpointComponent},
  {path:'chapter6',component:Chapter6StartpointComponent},
]

