import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs/Observable";
import { User } from "./api-user.service";

@Injectable()
export class InMemoryUserService implements InMemoryDbService{
  /* dummy database */
  private _database: any;

  /* In memory database */
  createDb(){
    this._database = {};
    this.createTableUser();
    return this._database;
  }

  /* create table */
  private createTable(tableName:string, data:any[]){
    this._database[tableName] = data;
  }

  /* creating user table */
  private createTableUser() {
    const users: User[] = [
      { id: 1, name: 'user1', age: 20},
      { id: 2, name: 'user2', age: 25},
      { id: 3, name: 'user3', age: 30},
      { id: 4, name: 'user4', age: 35},
    ];

    this.createTable('user',users);
  }

}
