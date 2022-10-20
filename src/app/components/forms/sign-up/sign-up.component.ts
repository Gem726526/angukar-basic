import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { passwordMatchingValidator } from './validators';
import { NavigationService } from 'src/app/services/router-back.services';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private router: Router,
  ) {

  }

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      {
        validators: passwordMatchingValidator
      }
    )


  }


  //getter functions
  get name() {
    return this.signUpForm.get('name') as FormControl;
  }
  get email() {
    return this.signUpForm.get('email') as FormControl;
  }
  get password() {
    return this.signUpForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword') as FormControl;
  }

  formSubmit() {
    if (!this.signUpForm.valid) { alert('Please enter valid data') }

  }
  onSubmit() {
    this.router.navigate(['/dashboard'])
  }
}



