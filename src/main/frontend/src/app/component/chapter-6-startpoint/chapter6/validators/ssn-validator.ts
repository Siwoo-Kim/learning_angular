import {FormControl} from "@angular/forms";

export function ssnValidator({ value }:FormControl) : { [key:string] : any}{
  value = value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : { ssn : true };
}
