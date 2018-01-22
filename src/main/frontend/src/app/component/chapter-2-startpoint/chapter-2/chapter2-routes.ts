import {RouterModule, Routes} from "@angular/router";
import {Chapter2HomeComponent} from "./chapter-2-home/chapter-2-home.component";
import {Chapter2ProductComponent} from "./chapter-2-product/chapter-2-product.component";
import {Chapter2ProductParamComponent} from "./chapter-2-product-param/chapter-2-product-param.component";

const chapter2Routes:Routes = [
  {path : 'chapter2/home', component :Chapter2HomeComponent},
  {path : 'chapter2/product', component :Chapter2ProductComponent},
  {path : 'chapter2/product/:id', component :Chapter2ProductParamComponent},

]

export const chapter2Routing = RouterModule.forChild(chapter2Routes);
