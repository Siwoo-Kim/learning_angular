import {Inject,  Injectable} from '@angular/core';
import * as dateFormat from 'date-fns/format';
import {LOG_LEVEL_TOKEN} from "../../../../tokens/app.tokens";

export enum LogLevel{ //Enum for constants which represent log level
    DEBUG , INFO , WARN , ERROR
}

@Injectable()  //If service has dependencies @Injectable is mandatory
export class AbstractLoggerService {
  logLevel: LogLevel = LogLevel.DEBUG;
  //Current LogLevel
  logs : string[] = [];
  //Log Messages
  private readonly MAX_HISTORY = 100;
  //Max count of the number of the log message
  // readonly is same with final in JAVA
  private readonly TIME_FORMATTER : string = 'YYYY-MM-DD HH:mm:ss.SSS';

          //Inject the value to the service from the module
          //You can also use InjectableToken which is more safe for name conflict
  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel:LogLevel) {
      console.log(logLevel);
       // if(this.logLevel)
      this.logLevel = logLevel;
  }

  //Provide User Interface to client (in the case, clients are components)
  debug(message:string) { this.log(LogLevel.DEBUG,message); }
  info(message:string) { this.log(LogLevel.INFO,message); }
  warn(message:string) { this.log(LogLevel.WARN,message); }
  error(message:string) { this.log(LogLevel.ERROR,message); }


  private log(logLevel: LogLevel, message: string) {
    const logMessage = this.doFormatMessage(logLevel,message);
        //Format the log level with proper LogLevel

    if(this.validateLogLevel(logLevel)){    //If the argument of logLevel is same with current LogLevel
      console.log(logMessage);              //display message to the console
    }

    this.keepLog(logMessage);     //Keep log message
  }

  private validateLogLevel(logLevel: LogLevel) {
    return logLevel >= this.logLevel;
  }

  private doFormatMessage(logLevel: LogLevel, message: string) {
    const timestamp = dateFormat(new Date(),this.TIME_FORMATTER);  //format([Date],[string:[Time Format]])
    return `[${LogLevel[this.logLevel]}  ${timestamp}  -  ${message}]`;
          // logLevel is just a number. Want to show the enum itself, LogLevel[logLevel]
  }

  private keepLog(logMessage: any) {
    if(this.logs.length >= this.MAX_HISTORY){
      this.logs.shift();    // trash the first element of the logs array
    }
    this.logs.push(logMessage);
  }

}
