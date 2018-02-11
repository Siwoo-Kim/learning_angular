import { Component, OnInit } from '@angular/core';
import {ApiUserService, User} from "../../services/api-user.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  formUser: User = { id: null, name: null, age: null };
  searchUser: User;

  constructor(
    public apiUserService: ApiUserService,
    public toastsManager: ToastsManager
  ) { }

  onFindUser(id: number) {
    /* Observable Subscriber */
    const subscriber = body => {
      console.log(body);
      this.searchUser = body;
    };

    this.apiUserService.user(id,subscriber);
  }

  onDeleteUser(id: number) {
    const subscriber = body => {
      /*
        Http 204 means deleting content is successful
        but does not provide content as response
      */
      if(body.status === 204){
        this.toastsManager.warning(`ID: ${id} deleted`);
        console.log(body);
        return;
      }else {
        this.toastsManager.warning(`ID: ${id}, the request of deleting failed`);
      }
    };
    this.apiUserService.remove(id,subscriber);
  }

  onUserRegister() {
    console.log(this.formUser);

    const subscriber = body => {
      console.log(body);
      const data = body;
      this.toastsManager.info(`${JSON.stringify(data)}`);
    };

    if(!this.formUser.id || this.formUser.id === 0){
      /* if id is null or equal to 0 , creating new user*/
      this.apiUserService.create(this.formUser,subscriber);
    }else{
      /* otherwise edit existing user */
      this.apiUserService.update(this.formUser,subscriber);
    }

      /* initiate new object */
    this.formUser = { id: null, name: null, age: null };
  }
}
