import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FooterComponent} from "./footer/footer.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MainDashboardComponent} from "./main-dashboard/main-dashboard.component";
import {RouterModule} from "@angular/router";

  /* App main/common/shared components */
const commonComponents = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  MainDashboardComponent,
  PageNotFoundComponent,

  /* material moduel */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    /* material moduel */
    MatToolbarModule, MatCheckboxModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
  declarations: commonComponents,
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainDashboardComponent,
    PageNotFoundComponent,
    MatToolbarModule, MatCheckboxModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
})
export class P3MainModule { }
