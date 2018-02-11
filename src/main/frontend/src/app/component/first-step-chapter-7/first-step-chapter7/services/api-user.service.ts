import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

export interface User {
  id : number;
  age : number;
  name : string;
}

@Injectable()  //To pass another dependency, @Injectable decorator is mandatory
export class ApiUserService {

  readonly backendUrl: string = '/user';

  constructor(public http:Http){ }
  /*http service enables communication between service and server via HTTP protocol*/

  user(id: number, callback){
    this.http.get(`/user/${id}`).map(response => response.json()).subscribe(callback);
  }

  create(user: User, callback){
    this.http.post(`/user`,user).map(response => response.json()).subscribe(callback);
  }

  update(user: User, callback){
    this.http.put(`/user/${user.id}`,user).map(response => response.json()).subscribe(callback);
  }

  remove(id: number, callback){
    this.http.delete(`/user/${id}`).subscribe(callback);
  }

}
