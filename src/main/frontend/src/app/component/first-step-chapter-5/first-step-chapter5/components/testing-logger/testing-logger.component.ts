import { Component, OnInit } from '@angular/core';
import {LoggerService, LogLevel} from "../../services/logger.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-testing-logger',
  templateUrl: './testing-logger.component.html',
  styleUrls: ['./testing-logger.component.css']
})
export class TestingLoggerComponent implements OnInit {
  loggerService:LoggerService;
  logForm:FormControl = new FormControl([],[Validators.minLength(1),Validators.required]);

  logLevel:LogLevel = LogLevel.INFO;
  logLevels:string[] = ['DEBUG','INFO','WARN','ERROR'];

  constructor() {
    this.loggerService = new LoggerService(LogLevel.INFO);
  }

  ngOnInit() {
  }


  pushedLog:string;
  alertClass = { 'alert-success' : true , 'alert' : true };

  onSendLog(){

    if(this.logForm.valid) {
      this.loggerService.logLevel = this.logLevel;
      switch (this.logLevel) {
        case LogLevel.DEBUG :
          this.loggerService.debug(this.logForm.value);
        case LogLevel.INFO :
          this.loggerService.info(this.logForm.value);
        case LogLevel.WARN :
          this.loggerService.warn(this.logForm.value);
        case LogLevel.ERROR :
          this.loggerService.error(this.logForm.value);
      }
      this.pushedLog = this.loggerService.logs[this.loggerService.logs.length - 1];
      this.alertClass = this.setStyleByLogLevel(this.logLevel);
    }

  }

  onChangeLogLevel(logLevel:string){
    this.logLevel = LogLevel[logLevel];
    console.log(LogLevel[this.logLevel]);
  }

  setStyleByLogLevel(logLevel:LogLevel) :any{
    switch(this.logLevel){
      case LogLevel.DEBUG : return { 'alert-dark' : true , 'alert' : true };
      case LogLevel.INFO : return { 'alert-success' : true , 'alert' : true };
      case LogLevel.WARN : return { 'alert-warning' : true , 'alert' : true };
      case LogLevel.ERROR : return { 'alert-danger' : true , 'alert' : true };
    }

  }

}
