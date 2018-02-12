import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form-practice',
  templateUrl: './template-form-practice.component.html',
  styleUrls: ['./template-form-practice.component.css']
})
export class TemplateFormPracticeComponent implements OnInit {
  @ViewChild('templateForm') templateForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data: {name,age,email}){
    console.log(this.templateForm.valid);
    console.log(data);
  }

  onReset(){/* Ignore */}
}
