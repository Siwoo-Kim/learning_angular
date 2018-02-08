import { Component, OnInit } from '@angular/core';
import {LoggerService, LogLevel} from "../../services/logger.service";

@Component({
  selector: 'app-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {
  logLevel:LogLevel = LogLevel.DEBUG;
  loggerService:LoggerService;

  constructor() {
                  // Constructing dependency for this class by new Keyword
    this.loggerService = new LoggerService(this.logLevel);
                  // By making two different instance of LoggerService
                  // There are different logLevel between components as well.
                  // We need to have some specific method to share one instance of the class -> SingleTon
  }

  ngOnInit() {
  }

  mousePostion:string;
                      // Extracting property from the the calling argument[MouseEvent Object]
  captureMousePosition({ clientX , clientY}){

    this.mousePostion = `x: ${clientX} , y: ${clientY}`;
    this.loggerService.debug(this.mousePostion);
  }

}
