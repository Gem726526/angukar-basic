import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  addUserForm: FormGroup;
  users:any= []
  constructor( private router : Router, private userList : UserService) {

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
  addUserButton(){
    this.router.navigate(['/addUser']);
  }
  editUserButton(index:number){

    console.log(this.users[index].name)
    this.router.navigate(['/editUser', index+1]);

  }
  deleteUserButton(index:number){

    console.log(this.users[index].name)
    this.router.navigate(['/deleteUser', index+1]);

  }


}


