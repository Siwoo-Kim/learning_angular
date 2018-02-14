import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import {AppCommonModule} from "../component/common/app-common.module";
import { NavbarComponent } from './components/p3-main/navbar/navbar.component';
import { SidebarComponent } from './components/p3-main/sidebar/sidebar.component';
import { FooterComponent } from './components/p3-main/footer/footer.component';
import {MainComponent} from "./components/main.component";
import {ProductModule} from "./components/product/product.module";
import {CategoryModule} from "./components/category/category.module";
import {P3MainModule} from "./components/p3-main/p3-main.module";
import {RouterModule} from "@angular/router";

const components = [
  MainComponent
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    RouterModule,

    /*App Modules*/
    ProductModule, CategoryModule,
    P3MainModule,
  ],
  declarations: components,
  exports : components
})
export class Project3Module {

}
