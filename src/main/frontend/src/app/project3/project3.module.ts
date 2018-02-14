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
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MainComponent} from "./components/main.component";

const components = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  MainComponent
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,

    /* material moduel */
    MatToolbarModule, MatCheckboxModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
  declarations: components,
  exports : components
})
export class Project3Module {

}
