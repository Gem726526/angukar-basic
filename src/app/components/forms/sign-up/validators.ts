import { FormGroup, FormControl, Validators } from '@angular/forms'

export function passwordMatchingValidator(form: FormGroup): Validators {
  return form.get('password').value === form.get('confirmPassword').value ? '' : { notMatched: true };
}
