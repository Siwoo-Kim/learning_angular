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
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryUserService} from "./services/in-memory-user.service";
import {BasicRxjsComponent} from "./components/basic-rxjs/basic-rxjs.component";


const components = [
  UserFormComponent,
  BasicRxjsComponent,

];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    HttpModule,
/*
    /!* In Memory Dummy Database *!/
    InMemoryWebApiModule.forRoot(InMemoryUserService, { delay: 500, put204: false }),
*/

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
