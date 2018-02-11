import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AbstractApi} from "./abstract-api";

export interface User {
  id : number;
  age : number;
  name : string;
}

@Injectable()  //To pass another dependency, @Injectable decorator is mandatory
export class ApiUserService extends AbstractApi{
  readonly backendUrl: string = '/user';

  constructor(public http:Http){
    super(http);
  }
  /*http service enables communication between service and server via HTTP protocol*/

  user(id: number, callback){
    super.get(`/user/${id}`).map(response =>{ response.json(); }).subscribe(callback);
  }

  create(user: User, callback){
    super.post(`/user`,user).map(response => response.json()).subscribe(callback);
  }

  update(user: User, callback){
    super.put(`/user/${user.id}`,user).map(response => response.json()).subscribe(callback);
  }

  remove(id: number, callback){
    super.delete(`/user/${id}`).subscribe(callback);
  }

}
