import {Component, Inject, OnInit} from '@angular/core';
import {Http, RequestMethod, Request} from "@angular/http";
import {backendUrl} from "../../tokens/tokens";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";

export interface User{
  id:number;
  name:string;
  email:string;
}

@Component({
  selector: 'app-chapter7-1-1',
  templateUrl: './chapter7-1-1.component.html',
  styleUrls: ['./chapter7-1-1.component.css']
})
export class Chapter711Component implements OnInit {
  users:User[];
  myInput:FormControl = new FormControl();

  searchUser:User;
  invalid:boolean = true;

  constructor(private http:Http,@Inject(backendUrl) private serverUrl:string) {
    this.http.get(`${serverUrl}/user`).subscribe(response => {
      var data = response.json();
      this.users = data;
    });

    this.myInput.valueChanges
      .debounceTime(500)
      .switchMap(value => this.getUser(value))
      .subscribe(response => {
        console.log(response)

        this.searchUser = response;
        this.invalid = false;
      }, error => this.invalid = true );
  }

  private getUser(value: string) :Observable<User>{
    var param:string = 'name='+value;

    var request = new Request({
      url : this.serverUrl+"/user/search",
      search : param,
      method : RequestMethod.Get
    });

    return this.http.request(request).map(response => response.json())
  }

  onSearch(){
    this.getUser(this.myInput.value).subscribe(response => {
      console.log(response)
      this.searchUser = response;
      this.invalid = false;
    }, error => this.invalid = true );
  }

  ngOnInit() {
  }

}
