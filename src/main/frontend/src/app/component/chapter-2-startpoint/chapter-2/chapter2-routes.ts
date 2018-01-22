import {RouterModule, Routes} from "@angular/router";
import {Chapter2HomeComponent} from "./chapter-2-home/chapter-2-home.component";
import {Chapter2ProductComponent} from "./chapter-2-product/chapter-2-product.component";
import {Chapter2ProductParamComponent} from "./chapter-2-product-param/chapter-2-product-param.component";
import {Chapter2ParentComponent} from "./chapter-2-parent/chapter-2-parent.component";
import {Chapter2ChildComponent} from "./chapter-2-child/chapter-2-child.component";
import {Chapter2Child2Component} from "./chapter-2-child-2/chapter-2-child-2.component";

const chapter2Routes:Routes = [
  {path : 'chapter2/home', component :Chapter2HomeComponent},
  {path : 'chapter2/product', component :Chapter2ProductComponent},
  {path : 'chapter2/product/:id', component :Chapter2ProductParamComponent},
  {
    path : 'chapter2/parent',component : Chapter2ParentComponent,
    children : [
      {path : 'child' , component : Chapter2ChildComponent},
      {path : 'child2/:name' , component : Chapter2Child2Component},
    ],
  },

]

export const chapter2Routing = RouterModule.forChild(chapter2Routes);
