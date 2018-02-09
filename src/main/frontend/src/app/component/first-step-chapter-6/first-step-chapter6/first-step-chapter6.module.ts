import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatChipsModule, MatExpansionModule, MatInputModule, MatListModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { CheckListComponent } from './components/check-list/check-list.component';
import {CheckResultComponent} from "./components/check-result/check-result.component";
import {AppCommonModule} from "../../common/app-common.module";
import {FormsModule} from "@angular/forms";

const components= [
  CheckListComponent,CheckResultComponent,
]

@NgModule({
  imports: [
    CommonModule,AppCommonModule,
    FormsModule,


    MatToolbarModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
  declarations: components,
  exports : components
})
export class FirstStepChapter6Module { }
