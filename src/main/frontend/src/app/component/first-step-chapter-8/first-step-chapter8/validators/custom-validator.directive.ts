import {Directive, forwardRef, Input} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from "@angular/forms";
/*
export const CUSTOM_VALIDATOR: any = {
  provide : NG_VALIDATORS,
  useExisting: forwardRef(() => CustomValidatorDirective),
  multi: true
};

@Directive({
  selector: '[appCustomValidator][ngModel]',
  providers: [CUSTOM_VALIDATOR]
})
export class CustomValidatorDirective implements  Validator{
  validate(c: AbstractControl): ValidationErrors | null {
    return undefined;
  }

  constructor() { }

}
*/

const MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinNumValidator),
  multi: true
};

@Directive({
  selector: '[cmin][ngModel]',
  providers: [MIN_VALIDATOR]
})
export class MinNumValidator implements Validator{
  @Input() cmin: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if(this.cmin != null){
      const min = Number.parseInt(this.cmin);
      return control.value >= min ? null : { 'min' : `${this.cmin} is minimum value` }
    }
    return null;
  }
}

const MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxNumValidator),
  multi: true
};

@Directive({
  selector: '[cmax][ngModel]',
  providers: [MAX_VALIDATOR]
})
export class MaxNumValidator implements Validator{
  @Input() cmax: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if(this.cmax != null){
      const max = Number.parseInt(this.cmax);
      return control.value <= max ? null : {'max' : `${this.cmax} is maximum value` };
    }
    return null;
  }
}
