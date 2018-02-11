import {Component, Host, Input, OnInit, Optional} from '@angular/core';
import {AbstractLoggerService, LogLevel} from "../../services/logger.service";
import {LoggerFirstService} from "../../services/logger-first.service";
import {LoggerSecondService} from "../../services/logger-second.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {

  /* logLevel:LogLevel = LogLevel.DEBUG; */
  loggerService:AbstractLoggerService;
  moveSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
  mouseObservable: Observable<MouseEvent> = this.moveSubject.asObservable();

  constructor( loggerService:AbstractLoggerService /* @Host() @Optional() loggerFirstService:LoggerFirstService, loggerSecondService:LoggerSecondService */) {
       //Getting singleton instance from Angular
    this.loggerService = loggerService;
    //this.loggerService = loggerFirstService ? loggerFirstService : loggerSecondService;

        // Constructing dependency for this class by new Keyword
    // this.loggerService = new AbstractLoggerService(this.logLevel);
        // By making two different instance of AbstractLoggerService
        // There are different logLevel between components as well.
        // We need to have some specific method to share one instance of the class -> SingleTon

  }

  ngOnInit() {
    this.mouseObservable
      .throttleTime(500)
      .map(mouseevent => [mouseevent.clientX, mouseevent.clientY])
      .subscribe(position => this.mousePostion = `x:${position[0]}, y:${position[1]}`);
  }

  mousePostion:string;
                      // Extracting property from the the calling argument[MouseEvent Object]
  captureMousePosition(mouseevent: MouseEvent /*{ clientX , clientY}*/){
    /*
    this.mousePostion = `x: ${clientX} , y: ${clientY}`;
    this.loggerService.debug(this.mousePostion);
    console.dir(this.loggerService);
    */
    this.moveSubject.next(mouseevent);
  }

}
