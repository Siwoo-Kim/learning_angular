import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatChipsModule, MatExpansionModule, MatInputModule, MatListModule, MatRadioModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { CheckListComponent } from './components/check-list/check-list.component';
import {CheckResultComponent} from "./components/check-result/check-result.component";
import {AppCommonModule} from "../../common/app-common.module";
import {FormsModule} from "@angular/forms";
import {CheckListService} from "./services/check-list.service";
import {ParentComponent} from "./components/parent/parent.component";
import {ChildComponent} from "./components/child/child.component";
import {Child2Component} from "./components/child2/child2.component";
import {DomSearchParentComponent} from "./components/dom-search-parent/dom-search-parent.component";

const components= [
  CheckListComponent,
  CheckResultComponent,
  ParentComponent,
  ChildComponent,
  Child2Component,
  DomSearchParentComponent,

];

@NgModule({
  imports: [
    CommonModule,AppCommonModule,
    FormsModule,


    MatToolbarModule, MatCheckboxModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
  providers: [
    {provide:CheckListService,useClass:CheckListService},
  ],
  declarations: components,
  exports : components
})
export class FirstStepChapter6Module { }
