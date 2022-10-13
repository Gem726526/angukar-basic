import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList:any[] = []
  index:number
constructor() { }
getUsers(){
     this.userList = JSON.parse(localStorage.getItem('Users'));
     return this.userList
  }
setUser(user:any[]){
  localStorage.setItem("Users", JSON.stringify(user));
}
}
