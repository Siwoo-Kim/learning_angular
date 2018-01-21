import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-1-startpoint',
  templateUrl: './chapter-1-startpoint.component.html',
  styleUrls: ['./chapter-1-startpoint.component.css']
})
export class Chapter1StartpointComponent implements OnInit {
  name:string;
  escapeHtml1:string;
  escapeHtml2:string;
  escapeHtml3:string;
  escapeHtml4:string;
  escapeHtml5:string;
  escapeHtml6:string;
  escapeHtml7:string;
  escapeHtml8: string;
  constructor() {
    this.name = 'Angular';
    this.escapeHtml1 = "{{name}}";
    this.escapeHtml2 = "\n" +
      "@Component({\n" +
      "  selector: 'app-chapter-1-startpoint',\n" +
      "  templateUrl: './chapter-1-startpoint.component.html',\n" +
      "  styleUrls: ['./chapter-1-startpoint.component.css']\n" +
      "})\n" +
      "export class Chapter1StartpointComponent implements OnInit {\n" +
      "  name:string;\n"+"}";

    this.escapeHtml3 = "\n" +
      "      @NgModule({\n" +
      "      declarations: [\n" +
      "      AppComponent,\n" +
      "      HomeComponent,\n" +
      "      Chapter1StartpointComponent,\n" +
      "      ],\n" +
      "      imports: [\n" +
      "      /* Angular Module */\n" +
      "      BrowserModule,HttpModule,\n" +
      "      RouterModule.forRoot(routes),\n" +
      "      ],\n" +
      "      providers: [],\n" +
      "      bootstrap: [AppComponent]\n" +
      "      })\n" +
      "      export class AppModule { }";

    this.escapeHtml4="{{property}}";
    this.escapeHtml5="[property] or [attr.attribute]";
    this.escapeHtml6="(event)";

    this.escapeHtml7=
      "<h1>Hello {{name}}! </h1>\n" +
      "    <span [hidden]=\"isValid\">The field is not valid</span>\n" +
      "    <button mat-raised-button (click)=\"onEventHandler()\" >Trigger event handler</button>\n" +
      "   ";

    this.escapeHtml8="<input #localTemplate type=\"text\">"

  }


  isValid:boolean=false;
  onEventHandler(){
    console.log(`Event is handled by event handler!`);
  }

  ngOnInit() {
  }


}
