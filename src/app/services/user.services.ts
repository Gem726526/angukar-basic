import { Injectable } from '@angular/core';

import { User } from '../interfaces/interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[]
  index: number
  constructor() { }
  getUsers(): User[] {
    this.userList = JSON.parse(localStorage.getItem('Users'));
    return this.userList
  }
  setUser(user: any[]) {
    localStorage.setItem("Users", JSON.stringify(user));
  }

}
