import {FormControl} from "@angular/forms";


export function positiveNumberValidator(formControl:FormControl):any{
  if(!formControl.value) { return null; }

  const price = parseInt(formControl.value);
  return price === null ||  ( typeof price === 'number' && price > 0 )
        ? null : { positivenumber : true };
}
