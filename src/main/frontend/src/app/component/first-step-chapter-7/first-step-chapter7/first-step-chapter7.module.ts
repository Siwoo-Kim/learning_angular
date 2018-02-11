import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {ApiUserService} from "./services/api-user.service";
import {FormsModule} from "@angular/forms";
import {UserFormComponent} from "./components/user-form/user-form.component";
import {AppCommonModule} from "../../common/app-common.module";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule, MatExpansionModule, MatInputModule, MatListModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";


const components = [
  UserFormComponent,
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    HttpModule,



    MatToolbarModule, MatCheckboxModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
  declarations: components,
  exports : components,
  providers : [ApiUserService,]
})
export class FirstStepChapter7Module { }
