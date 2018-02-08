import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppCommonModule} from "../../common/app-common.module";
import {
  MatButtonModule, MatChipsModule, MatExpansionModule, MatInputModule, MatListModule,
  MatRadioModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import { TestingLoggerComponent } from './components/testing-logger/testing-logger.component';
import {LoggerService} from "./services/logger.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const components = [
  TestingLoggerComponent,
]

@NgModule({
  imports: [
    CommonModule,AppCommonModule,
    ReactiveFormsModule,FormsModule,
    MatToolbarModule,
    MatSnackBarModule, MatInputModule,
    MatTooltipModule, MatRadioModule,
    MatButtonModule,MatListModule,
    MatExpansionModule,MatChipsModule,
  ],
  providers : [LoggerService, ],
  declarations: components,
  exports : components
})
export class FirstStepChapter5Module { }
