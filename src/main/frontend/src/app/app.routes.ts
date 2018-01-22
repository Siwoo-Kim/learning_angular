import {Routes} from "@angular/router";
import {HomeComponent} from "./component/common/home/home.component";
import {Chapter1StartpointComponent} from "./component/chapter-1-startpoint/chapter-1-startpoint.component";
import {ProjectStartpointComponent} from "./project/component/project-startpoint/project-startpoint.component";
import {Chapter2StartpointComponent} from "./component/chapter-2-startpoint/chapter-2-startpoint.component";

export const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'chapter1',component:Chapter1StartpointComponent},
  {path:'chapter2',component:Chapter2StartpointComponent},
  {path:'project',component:ProjectStartpointComponent}
]

