import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/interface";
import { UserService } from "src/app/services/user.services";


@Component(
  {
    selector: 'app-card',
    templateUrl: './card.component.html',
  }
)
export class CardComponent implements OnInit {
  totalUsers: number;
  topUsers: User[] = []
  users: User
  constructor(private userList: UserService) {

  }
  ngOnInit() {
    this.totalUsers = this.userList.getUsers().length
    this.topUsers = this.userList.getUsers()
    console.log(this.totalUsers)
  }

}
