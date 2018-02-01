import {Code} from "../model/code";
import {Inject, OnInit} from "@angular/core";
import {
  Chapter711Component,
  User
} from "../component/chapter-7-startpoint/chapter7/components/chapter7-1-1/chapter7-1-1.component";
import {Http, Request, RequestMethod} from "@angular/http";
import {backendUrl} from "../component/chapter-7-startpoint/chapter7/tokens/tokens";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";


export var chapter7_code:Code[] = [
  {
    id : 1, chapter : 7,
    title : 'httpBasic.ts',
    code : 'export class Chapter711Component implements OnInit {\n' +
    '  users:User[];\n' +
    '  myInput:FormControl = new FormControl();\n' +
    '\n' +
    '  searchUser:User;\n' +
    '\n' +
    '  constructor(private http:Http,@Inject(backendUrl) private serverUrl:string) {\n' +
    '    this.http.get(`${serverUrl}/user`).subscribe(response => {\n' +
    '      var data = response.json();\n' +
    '      this.users = data;\n' +
    '    });\n' +
    '\n' +
    '    this.myInput.valueChanges\n' +
    '      .debounceTime(500)\n' +
    '      .switchMap(value => this.getUser(value))\n' +
    '      .subscribe(response => console.log(response) );\n' +
    '  }\n' +
    '\n' +
    '  private getUser(value: string) :Observable<User>{\n' +
    '    var param:string = \'name=\'+value;\n' +
    '\n' +
    '    var request = new Request({\n' +
    '      url : this.serverUrl+"/user/search",\n' +
    '      search : param,\n' +
    '      method : RequestMethod.Get\n' +
    '    });\n' +
    '\n' +
    '    return this.http.request(request).map(response => response.json())\n' +
    '  }'
  },
];
