import { Component, OnInit } from '@angular/core';

import 'rxjs/Rx'
import {FormControl} from "@angular/forms";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-chapter-4-4-1',
  template : `    
    <hr>
    <mat-card>
      <mat-card-title><h4><i class="fa fa-cogs" aria-hidden="true"></i> <strong>Try</strong></h4></mat-card-title>
      <mat-card-content>
        <div>
          <h3>Searching Weatehr</h3>
          <p><span><strong>{{temperature}}</strong></span></p>
          <mat-input-container>
            <input matInput placeholder="Enter City" type="text" [formControl]="searchInput">
          </mat-input-container>
        </div>
      </mat-card-content>
    </mat-card>
    <hr><br/>
  `,
  styleUrls: ['./chapter-4-4-1.component.css']
})
export class Chapter441Component implements OnInit {
  private baseWeatherUrl:string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix:string = '&units=metric&appid=b9dbf1e48fe5e56ff01cecbdd54fc138';

  searchInput:FormControl = new FormControl();
  temperature:string;

  constructor(private http:Http) {
    this.searchInput.valueChanges
      .debounceTime(200)
      .switchMap( city => this.getWeather(city) )
      .subscribe( res => {
        this.temperature = `Current temperature is ${res['main'].temp}C, humidity: ${res['main'].humidity}%`
      });
  }

  private getWeather(city: string):Observable<Array<string>> {
    return this.http.get(this.baseWeatherUrl + city + this.urlSuffix)
      .map(res => {
        console.log(res.json());
        return res.json();
      })
      .catch(err => {
        if(err.status == 404){
          console.log(`City ${city} not found`);
          return Observable.of();
        }
      });
  }


  ngOnInit() {
  }

}
