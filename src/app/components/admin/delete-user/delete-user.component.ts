import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.services";
@Component({
  selector: 'app-delete',
  templateUrl: './delete-user.component.html'
})

export class DeleteUserComponent implements OnInit {
  id: any
  userList: any[] = []
  constructor(private router: Router,
    private route: ActivatedRoute, private users: UserService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.userList = this.users.getUsers()


  }
  ngOnInit() {

  }
  goToAdmin() {
    this.router.navigate(['/admin'])
  }
  deleteUser() {
    this.userList.splice(this.id - 1, 1)
    this.users.setUser(this.userList);
    // localStorage.setItem("Users", JSON.stringify(this.userList));
    this.router.navigate(['/admin'])
  }
}




