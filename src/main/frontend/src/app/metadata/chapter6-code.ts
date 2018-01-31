import {Code} from "../model/code";
import {FormControl, FormGroup} from "@angular/forms";

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
]
