import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sginout',
  templateUrl: './signout.component.html'
})

export class SignOutUserComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  signOutUser() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  goToAdmin() {
    this.router.navigate(['/admin'])
  }
}




