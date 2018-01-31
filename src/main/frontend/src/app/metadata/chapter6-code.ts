import {Code} from "../model/code";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OnInit} from "@angular/core";
import {Chapter617Component} from "../component/chapter-6-startpoint/chapter6/components/chapter6-1-7/chapter6-1-7.component";
import {ssnValidator} from "../component/chapter-6-startpoint/chapter6/validators/ssn-validator";
import {Chapter621Component} from "../component/chapter-6-startpoint/chapter6/components/chapter6-2-1/chapter6-2-1.component";
import {equalValidator} from "../component/chapter-6-startpoint/chapter6/validators/equal-validator";

export var chapter6_code:Code[] = [
  {
    id : 1, chapter : 6,
    title : 'ngForm.html',
    code : '\n' +
    '<form #myForm="ngForm">\n' +
    '  <pre>{{myForm[\'form\'] | json }}</pre>\n' +
    '</form>\n'
  },
  {
    id : 2, chapter : 6,
    title : 'ngModel.html',
    code : '\n' +
    '  <mat-card-header>\n' +
    '    <p>\n' +
    '    <strong>User Name : {{userName}}</strong><br/>\n' +
    '    <strong>NgModel Instance Value : {{userNameInput.value}}</strong>\n' +
    '    </p>\n' +
    '  </mat-card-header>\n' +
    '  <mat-card-content>\n' +
    '    <form #myForm="ngForm" class="form-group" (ngSubmit)="onSubmit(myForm.value)" >\n' +
    '      <mat-form-field>\n' +
    '        <input ngModel #userNameInput="ngModel" matInput placeholder="Enter Name"\n' +
    '               type="text" name="username">\n' +
    '      </mat-form-field>\n' +
    '      <button type="submit" mat-raised-button color="accent" >Submit</button>\n' +
    '    </form>\n' +
    '  </mat-card-content>'
  },

  {
    id : 3, chapter : 6,
    title : 'ngModelGroup.html',
    code : '<mat-card>\n' +
    '  <mat-card-content>\n' +
    '    <mat-card-header>\n' +
    '      <p>\n' +
    '        First Name: {{myForm.value.fullName.firstName}} <br/>\n' +
    '        Last Name: {{myForm.value.fullName.lastName}} <br/>\n' +
    '      </p>\n' +
    '    </mat-card-header>\n' +
    '    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value.fullName)">\n' +
    '      <div ngModelGroup="fullName">\n' +
    '        <mat-form-field>\n' +
    '          <input matInput placeholder="Enter First Name" ngModel type="text"\n' +
    '                 name="firstName">\n' +
    '        </mat-form-field>\n' +
    '        <mat-form-field>\n' +
    '          <input matInput placeholder="Enter Last Name" ngModel type="text"\n' +
    '                 name="lastName">\n' +
    '        </mat-form-field>\n' +
    '        <button type="submit" mat-raised-button color="accent">Submit</button>\n' +
    '      </div>\n' +
    '    </form>\n' +
    '  </mat-card-content>\n' +
    '</mat-card>\n'
  },

  {
    id : 4, chapter : 6,
    title : 'joinSubmit.html',
    code : '\n' +
    '<mat-card>\n' +
    '  <mat-card-content>\n' +
    '  <form\n' +
    '    class="form-group"\n' +
    '    #joinForm="ngForm" (ngSubmit)="onSubmit(joinForm.value)">\n' +
    '    <mat-form-field>\n' +
    '      <input matInput ngModel placeholder="Enter name"\n' +
    '             type="text" name="username">\n' +
    '    </mat-form-field>\n' +
    '    <mat-form-field>\n' +
    '      <input matInput ngModel placeholder="Enter ssn"\n' +
    '             type="text" name="ssn">\n' +
    '    </mat-form-field>\n' +
    '\n' +
    '    <div ngModelGroup="passwordsGroup">\n' +
    '      <mat-form-field>\n' +
    '        <input matInput ngModel placeholder="Enter password"\n' +
    '               type="password" name="password">\n' +
    '      </mat-form-field>\n' +
    '      <mat-form-field>\n' +
    '        <input matInput ngModel placeholder="Enter confirm password"\n' +
    '               type="password" name="pconfirm">\n' +
    '      </mat-form-field>\n' +
    '    </div>\n' +
    '\n' +
    '    <button type="submit" mat-raised-button color="primary">Join</button>\n' +
    '  </form>\n' +
    '  </mat-card-content>\n' +
    '</mat-card>'
  },
  {
    id : 5, chapter : 6,
    title : 'formGroup.html',
    code : '\n' +
    '    <form [formGroup]="formGroup" (ngSubmit)="onFormSubmit()">\n' +
    '      <mat-form-field>\n' +
    '        <input matInput type="date" placeholder="Enter From Date"\n' +
    '          [formControlName]="\'to\'">\n' +
    '      </mat-form-field>\n' +
    '      <mat-form-field>\n' +
    '        <input matInput type="date" placeholder="Enter to Date"\n' +
    '          [formControlName]="\'from\'">\n' +
    '      </mat-form-field>\n' +
    '      <button mat-raised-button type="submit">Submit</button>\n' +
    '    </form>'
  },
  {
    id : 6, chapter : 6,
    title : 'formGroup.ts',
    code : '  formGroup:FormGroup = new FormGroup({\n' +
    '    to : new FormControl(),\n' +
    '    from : new FormControl()\n' +
    '  });\n' +
    '\n' +
    '  to:Date;\n' +
    '  from:Date;\n' +
    '\n' +
    '  onFormSubmit(){\n' +
    '\n' +
    '    this.to = this.formGroup.value[\'to\'];\n' +
    '    this.from = this.formGroup.value[\'from\'];\n' +
    '\n' +
    '  }\n'
  },
  {
    id : 7, chapter : 6,
    title : 'formGroupName.html',
    code : '\n' +
    '  <div [formGroupName]="\'dateRange\'">\n' +
    '    <mat-form-field>\n' +
    '      <input type="date" matInput placeholder="Enter from Date"\n' +
    '        [formControlName]="\'from\'">\n' +
    '    </mat-form-field>\n' +
    '    <mat-form-field>\n' +
    '      <input type="date" matInput placeholder="Enter from Date"\n' +
    '             [formControlName]="\'to\'">\n' +
    '    </mat-form-field>\n' +
    '  </div>'
  },
  {
    id : 8, chapter : 6,
    title : 'formGroupName.html',
    code : '\n' +
    'export class Chapter617Component implements OnInit {\n' +
    '  myControl:FormControl = new FormControl(\'Guest\');\n' +
    '  name:String;\n' +
    '\n' +
    '  constructor() {\n' +
    '    this.myControl.valueChanges\n' +
    '      .debounceTime(500)\n' +
    '      .subscribe(data => this.name = data );\n' +
    '  }'
  },

  {
    id : 9, chapter : 6,
    title : 'equalValidator.ts',
    code : 'export function equalValidator({ value } : FormGroup) : { [key:string] : any}{\n' +
    '  const [first , ...rest] = Object.keys(value || {});\n' +
    '  const valid = rest.every(v => value[v] === value[first]);\n' +
    '  return valid ? null : { equal : true };\n' +
    '}'
  },
  {
    id : 10, chapter : 6,
    title : 'customValidator.ts',
    code : '\n' +
    'export class Chapter621Component implements OnInit {\n' +
    '  formGroup:FormGroup;\n' +
    '\n' +
    '  constructor() {\n' +
    '    this.formGroup = new FormGroup({\n' +
    '      \'username\' : new FormControl(\'\',Validators.required),\n' +
    '      \'ssn\' : new FormControl(\'\',ssnValidator),\n' +
    '      \'passwordsGroup\' : new FormGroup({\n' +
    '        \'password\' : new FormControl(\'\',[Validators.required,Validators.minLength(5) ] ),\n' +
    '        \'pconfirm\' : new FormControl(\'\')\n' +
    '      },equalValidator)\n' +
    '    })\n' +
    '  }\n' +
    '\n' +
    '  valid:boolean;\n' +
    '\n' +
    '  onFormSubmit(){\n' +
    '    console.log(this.formGroup.valid);\n' +
    '    this.valid = this.formGroup.valid;\n' +
    '  }'
  },
]
