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
  constructor() {
    this.name = 'Angular';
    this.escapeHtml1 = "{{name}}";
    this.escapeHtml2 = "\n" +
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

  }

  ngOnInit() {
  }

}
