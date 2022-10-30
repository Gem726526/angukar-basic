import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/interface";
import { UserService } from "src/app/services/user.services";
@Component({
  selector: 'app-dahboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  date: string
  topUsers: User[] = []
  users: User
  constructor(private userList: UserService) {

  }
  ngOnInit(): void {
    this.date = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate()
    this.topUsers = this.userList.getUsers()

  }

}
