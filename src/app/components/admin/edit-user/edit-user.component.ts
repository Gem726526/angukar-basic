import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.services";

@Component(
  {
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html'
  }
)
export class EditUserComponent implements OnInit {
  public editUserForm: FormGroup;
  id: any
  user: any
  userList: any[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private users: UserService,


  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.userList = this.users.getUsers()
    this.user = this.userList[this.id - 1]
  }


  ngOnInit() {
    this.editUserForm = new FormGroup(
      {
        name: new FormControl(this.user.name, [Validators.required, Validators.minLength(5)]),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      }
    )

  }

  get name() {
    return this.editUserForm.get('name') as FormControl;
  }
  get email() {
    return this.editUserForm.get('email') as FormControl;
  }
  onSubmit() {
    this.updateUser()
    this.router.navigate(['/admin'])




  }
  updateUser() {
    this.user.name = this.editUserForm.value.name
    this.user.email = this.editUserForm.value.email
    this.user = { name: this.user.name, email: this.user.email }
    this.userList.splice(this.id - 1, 1, this.user)
    this.users.setUser(this.userList);
  }

  goToAdmin() {
    this.router.navigate(['/admin'])
  }
}
