import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-template-from-validator-practice',
  templateUrl: './template-from-validator-practice.component.html',
  styleUrls: ['./template-from-validator-practice.component.css']
})
export class TemplateFromValidatorPracticeComponent implements AfterViewInit {

  title: string = 'Register Product';
  product: {name, price, amount, description};
  errorCodes: string[] = ['cmin','cmax','minlength','maxlength','required','pattern'];
  errors: any;
  @ViewChild('templateForm') templateForm: NgForm;

  constructor(private toastrManager:ToastsManager) {
    this.product = {
      name : '',
      price : null,
      amount : null,
      description : ''
    };
  }

  ngAfterViewInit(): void {
    this.templateForm.statusChanges
      .filter(status => status === 'INVALID')
      .switchMap(() => {
        this.errors = [];
        return Observable.from(Object.keys(this.templateForm.controls));
      })
      .subscribe((controlName) =>{
        this.errorCodes
          .filter(code => this.templateForm.hasError(code,[controlName]))
          .forEach(code => {
            const errorMsg = this.templateForm.getError(code, [controlName]);
            this.errors.push({ controlName, code, errorMsg});
          });
      });

    this.templateForm.statusChanges.filter(status => status === 'VALID')
      .subscribe(() => this.errors = []);
  }

  onSubmit(product: {name, price, amount, description}){
    this.product = product;
    this.toastrManager.info(`Submit : ${JSON.stringify(this.product,null,2)}`);
  }

}
