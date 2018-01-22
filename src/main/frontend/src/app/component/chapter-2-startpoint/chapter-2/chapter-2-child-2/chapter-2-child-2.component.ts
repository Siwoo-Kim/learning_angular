import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chapter-2-child-2',
  templateUrl: './chapter-2-child-2.component.html',
  styleUrls: ['./chapter-2-child-2.component.css']
})
export class Chapter2Child2Component implements OnInit {
  name:string;
  constructor(private activateRoute:ActivatedRoute) {
    this.name = this.activateRoute.snapshot.params['name'];
  }

  ngOnInit() {
  }

}
