import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  addUserForm: FormGroup;
  users: any = []
  constructor(private router: Router, private userList: UserService) {

  }
  ngOnInit() {
    this.users = this.userList.getUsers()
  }
  //getter functions
  get name() {
    return this.addUserForm.get('name') as FormControl;
  }
  get email() {
    return this.addUserForm.get('email') as FormControl;
  }
  addUserButton() {
    console.log('hello')
    this.router.navigate(['admin/addUser']);
  }
  editUserButton(index: number) {


    this.router.navigate(['admin/editUser', index + 1]);

  }
  deleteUserButton(index: number) {


    this.router.navigate(['admin/deleteUser', index + 1]);

  }


}


