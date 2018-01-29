import {Code} from "../model/code";

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

]
