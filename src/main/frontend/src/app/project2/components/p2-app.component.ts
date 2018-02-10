import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './p2-app.component.html',
  styles : [`
    h3 {
      color : dodgerblue;
    }
  `]
})
export class P2AppComponent {
  serverElements = [
    {
      type : 'server',
      name : 'TestServer',
      content : 'Just a test! '
    },
    ];


}
