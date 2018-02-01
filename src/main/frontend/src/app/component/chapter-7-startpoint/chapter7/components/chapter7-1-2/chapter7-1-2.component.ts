import {Component, Inject, OnInit} from '@angular/core';
import {Http, RequestMethod, RequestOptionsArgs, Headers ,Request} from "@angular/http";
import {backendUrl} from "../../tokens/tokens";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../chapter7-1-1/chapter7-1-1.component";

@Component({
  selector: 'app-chapter7-1-2',
  templateUrl: './chapter7-1-2.component.html',
  styleUrls: ['./chapter7-1-2.component.css']
})
export class Chapter712Component implements OnInit {

  formGroup:FormGroup;

  constructor(
    private http:Http,@Inject(backendUrl) private serverUrl:string,
    formBuilder:FormBuilder
              ) {
    this.formGroup = formBuilder.group({
      'name' : new FormControl('',Validators.minLength(3)),
      'email' : new FormControl('',Validators.email)
    });

  }

  savedUser:User;

  onUserSubmit(){

    console.log(this.formGroup.value);

    if(this.formGroup.valid){
      var requestOptionArgs :RequestOptionsArgs ={
        url : `${this.serverUrl}/user/add`,
        method : RequestMethod.Post,
        headers : new Headers({
          'Accept' : 'application/json',
        }),
        body : this.formGroup.value,
        params : this.formGroup.value
      };


      this.http.post(`${this.serverUrl}/user/add`,requestOptionArgs)
        .map(response => response.json()).subscribe(data => { console.log(data);this.savedUser = data; });
    }
  }

  ngOnInit() {
  }

}
