import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html'
})
export class LogInComponent implements OnInit {
  @ViewChild('LoginForm') loginForm: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.loginForm.validator
    this.router.navigate(['/dashboard'])
  }


}
