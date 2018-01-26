import {Chapter43Component} from "../component/chapter-4-startpoint/chapter4/components/chapter-4-3/chapter-4-3.component";
import {Component, OnInit, Pipe, PipeTransform} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Chapter44Component} from "../component/chapter-4-startpoint/chapter4/components/chapter-4-4/chapter-4-4.component";
import {FormControl} from "@angular/forms";
import {Http} from "@angular/http";
import {Chapter441Component} from "../component/chapter-4-startpoint/chapter4/components/chapter-4-4-1/chapter-4-4-1.component";

export const chapter4_code = [
  {
    "id" : "4-1",
    "title" : "databindingComponent.html",
    "code" : "\n" +
    "<div>\n" +
    "  <h3>Greeting {{name}}!</h3>\n" +
    "  <span [hidden]=\"isHidden\">The span element is hidden</span>\n" +
    "  <button (click)=\"onEventHandler()\">Trigger Event</button>\n" +
    "</div>\n"
  },

  {
    "id" : "4-1-1",
    "title" : "eventComponent.html",
    "code" : "\n" +
    "<button (click)=\"onClickHandler()\">Get data</button>\n" +
    "<input placeholder=\"Enter your name\" (input)=\"onInputHandler($event)\">\n" +
    "\n" +
    "<div>\n" +
    "  <span *ngIf=\"data\">{{data}}</span>\n" +
    "  <span *ngIf=\"name\">{{name}}</span>\n" +
    "</div>\n"
  },

  {
    "id" : "4-1-2",
    "title" : "attributeAndProperty.html",
    "code" : " <div>\n" +
    "      <h3>Attribute And Property Binding</h3>\n" +
    "      <mat-form-field style=\"width: 100%\" >\n" +
    "      <input matInput type=\"text\" [value]=\"greeting\" [attr.value]=\"greeting\"\n" +
    "        (input)=\"onInputHandler($event)\"\n" +
    "      >\n" +
    "      </mat-form-field>\n" +
    "    </div>"
  },

  {
    "id" : "4-2-1",
    "title" : "structuralBinding.html",
    "code" : "\n" +
    "        <mat-radio-button value=\"true\" (change)=\"isShow=radioButton1.value\" #radioButton1>Turn On</mat-radio-button>\n" +
    "        <mat-radio-button value=\"false\" (change)=\"isShow=radioButton2.value\" #radioButton2>Turn Off</mat-radio-button>\n" +
    "\n" +
    "        <p>\n" +
    "          State : <strong>{{isShow}}</strong>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <span *ngIf=\"isShow\" ><strong>State is turn on</strong></span>\n" +
    "        </p>"
  },

  {
    "id" : "4-3-1",
    "title" : "two-wayBinding.html",
    "code" : "\n" +
    "      <h3>Two-Way Binding</h3>\n" +
    "      <mat-input-container>\n" +
    "        <input matInput type=\"text\" placeholder=\"Enter your id\"\n" +
    "               [(ngModel)]=\"cookiedName\">\n" +
    "        <br>\n" +
    "        <p>Your ID is {{cookieName}}</p>\n" +
    "      </mat-input-container>"
  },

  {
    "id" : "4-3-2",
    "title" : "two-wayBinding.ts",
    "code" : "\n" +
    "@Component({\n" +
    "  selector: 'app-chapter-4-3',\n" +
    "  templateUrl: './chapter-4-3.component.html',\n" +
    "  styleUrls: ['./chapter-4-3.component.css']\n" +
    "})\n" +
    "export class Chapter43Component implements OnInit {\n" +
    "  cookiedName:string;\n" +
    "\n" +
    "  constructor() {\n" +
    "    setTimeout(()=>{\n" +
    "      this.cookiedName = \"user01@email.com\"\n" +
    "    },3000);\n" +
    "  }\n"
  },


  {
    "id" : "4-4",
    "title" : "observable.ts",
    "code" : "\n" +
    "\n" +
    "    let mySubscription:Subscription =\n" +
    "      new Observable(subscriber => { subscriber.next([1,2,3,4,5])})\n" +
    "      .subscribe(data => (<Array<number>>data).forEach(item => console.log(item) ));\n"
  },

  {
    "id" : "4-4-1",
    "title" : "observable.ts",
    "code" : "\n" +
    "export class Chapter44Component implements OnInit {\n" +
    "  inputString:string;\n" +
    "\n" +
    "  onKeyUpHandler(event : any){\n" +
    "    this.inputString = event.target.value;\n" +
    "  }"
  },

  {
    "id" : "4-4-2",
    "title" : "observable.ts",
    "code" : "\n" +
    "export class Chapter44Component implements OnInit {\n" +
    "  inputString:string;\n" +
    "  observableInput:FormControl = new FormControl();\n" +
    "\n" +
    "  constructor() {\n" +
    "    this.observableInput.valueChanges\n" +
    "      .debounceTime(500)\n" +
    "      .subscribe( value => this.inputString = value );\n" +
    "  }\n"
  },

  {
    "id" : "4-4-3",
    "title" : "cancelObservable.ts",
    "code" : "\n" +
    "@Component({\n" +
    "  selector: 'app-chapter-4-4-1',\n" +
    "  template : `    \n" +
    "    <hr>\n" +
    "    <mat-card>\n" +
    "      <mat-card-title><h4><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <strong>Try</strong></h4></mat-card-title>\n" +
    "      <mat-card-content>\n" +
    "        <div>\n" +
    "          <h3>Searching Weatehr</h3>\n" +
    "          <p><span><strong>{{temperature}}</strong></span></p>\n" +
    "          <mat-input-container>\n" +
    "            <input matInput placeholder=\"Enter City\" type=\"text\" [formControl]=\"searchInput\">\n" +
    "          </mat-input-container>\n" +
    "        </div>\n" +
    "      </mat-card-content>\n" +
    "    </mat-card>\n" +
    "    <hr><br/>\n" +
    "  `,\n" +
    "  styleUrls: ['./chapter-4-4-1.component.css']\n" +
    "})\n" +
    "export class Chapter441Component implements OnInit {\n" +
    "  private baseWeatherUrl:string = 'http://api.openweathermap.org/data/2.5/weather?q=';\n" +
    "  private urlSuffix:string = '&units=metric&appid=b9dbf1e48fe5e56ff01cecbdd54fc138';\n" +
    "\n" +
    "  searchInput:FormControl = new FormControl();\n" +
    "  temperature:string;\n" +
    "\n" +
    "  constructor(private http:Http) {\n" +
    "    this.searchInput.valueChanges\n" +
    "      .debounceTime(200)\n" +
    "      .switchMap( city => this.getWeather(city) )\n" +
    "      .subscribe( res => {\n" +
    "        this.temperature = `Current temperature is ${res['main'].temp}C, humidity: ${res['main'].humidity}%`\n" +
    "      });\n" +
    "  }\n" +
    "\n" +
    "  private getWeather(city: string):Observable<Array<string>> {\n" +
    "    return this.http.get(this.baseWeatherUrl + city + this.urlSuffix)\n" +
    "      .map(res => {\n" +
    "        console.log(res.json());\n" +
    "        return res.json();\n" +
    "      })\n" +
    "      .catch(err => {\n" +
    "        if(err.status == 404){\n" +
    "          console.log(`City ${city} not found`);\n" +
    "          return Observable.of();\n" +
    "        }\n" +
    "      });\n" +
    "  }"
  },

  {
    "id" : "4-5",
    "title" : "temperatuePipe.ts",
    "code" : "\n" +
    "@Pipe({name: 'temperature'})\n" +
    "export class TemperaturePipe implements PipeTransform {\n" +
    "\n" +
    "  transform(value: number, fromTo: string): any {\n" +
    "\n" +
    "    if(!fromTo){ throw 'Temperature pipe required parameter FtoC or CtoF'}\n" +
    "\n" +
    "    return (fromTo === 'FtoC') ? (value - 32) * 5.0 /9.0 : (value * 5.0) + 5.0 + 32;\n" +
    "    \n" +
    "  }\n" +
    "\n" +
    "}\n"
  },

]
