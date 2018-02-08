import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-example-4-13',
  templateUrl: './example-4-13.component.html',
  styleUrls: ['./example-4-13.component.css']
})
export class Example413Component implements OnInit {

  formGroup:FormGroup;

  constructor(formBuilder:FormBuilder) {
    this.formGroup = formBuilder.group({
      name : new FormControl([],[Validators.minLength(3)]),
      email : new FormControl([],[Validators.email])
    });

  }

  ngOnInit() {
  }

  member : {name:string,email:string};


  onSubmit(){
    if(this.formGroup.valid){
      this.member = {name : this.formGroup.value['name'] ,
        email : this.formGroup.value['email']} ;
    }
  }


  animals:{name :string , crying :string}[] = [
    {name:"Dog",crying:"bark"},{name:"Cat",crying:"mew"},{name:"Duck",crying:"quak"},
  ];
  selectedAnimal:{name :string , crying :string};

  onSelectAnimal(animal:{name:string,crying:string}){
    console.log(animal);
    this.selectedAnimal = animal;
  }
}
