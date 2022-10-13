import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  user: any = {}
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.addUserForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }
    )
  }
  //getter functions
  get name() {
    return this.addUserForm.get('name') as FormControl;
  }
  get email() {
    return this.addUserForm.get('email') as FormControl;
  }
  onSubmit() {
    console.log(this.addUserForm)
    console.log(this.addUserForm.value)
    this.user = Object.assign(this.user, this.addUserForm.value);
    this.addUser(this.user)
    this.router.navigate(['/admin']);
  }
  addUser(user) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [...users, user]
    }
    else {
      users = [user]
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
  goToAdmin() {
    this.router.navigate(['/admin'])
  }
}


