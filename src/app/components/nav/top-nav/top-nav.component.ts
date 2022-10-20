import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html'
})

export class TopNavComponent implements OnInit {
  constructor(public router: Router) {

  }
  date: string
  ngOnInit(): void {
    this.date = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate()

  }


}
