import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppCommonModule} from "../../common/app-common.module";
import {
  MatButtonModule, MatChipsModule, MatExpansionModule, MatInputModule, MatListModule,
  MatRadioModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import { TestingLoggerComponent } from './components/testing-logger/testing-logger.component';
import {AbstractLoggerService, LogLevel} from "./services/logger.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MouseTrackZoneComponent} from "./components/mouse-track-zone/mouse-track-zone.component";
import {LOG_LEVEL_TOKEN} from "../../../tokens/app.tokens";
import {LoggerFirstService} from "./services/logger-first.service";
import {LoggerSecondService} from "./services/logger-second.service";


const components = [
  TestingLoggerComponent, MouseTrackZoneComponent,
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
            //Providing service to the components in the modules
            // {provide : key , useClass:[Object] | useValue:[value]}
  providers : [ //LoggerFirstService, LoggerSecondService,
      AbstractLoggerService,
      // {provide:'logLevel',useValue:LogLevel.INFO}
      {provide:LOG_LEVEL_TOKEN,useValue:LogLevel.INFO}
    ],

  declarations: components,
  exports : components
})
export class FirstStepChapter5Module { }
