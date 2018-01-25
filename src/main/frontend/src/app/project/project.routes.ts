import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {ProjectStartpointComponent} from "./component/project-startpoint/project-startpoint.component";
import {ProductDetailComponent} from "./component/product-detail/product-detail.component";

const routes:Routes = [
  { path : 'project' , component : ProjectStartpointComponent ,
    children : [
      {path:'' , component :HomeComponent},
      { path : 'products/:productId' , component :ProductDetailComponent}
    ]
  },

];

export const projectRouting = RouterModule.forChild(routes);
