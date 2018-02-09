import {Inject, Injectable} from "@angular/core";
import {AbstractLoggerService, LogLevel} from "./logger.service";
import {LOG_LEVEL_TOKEN} from "../../../../tokens/app.tokens";

@Injectable()
export class LoggerFirstService extends AbstractLoggerService{

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel:LogLevel) {
    console.log("LoggerFirstService is called");

    super(logLevel);
  }



}
