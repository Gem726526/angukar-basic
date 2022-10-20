import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-dahboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  date: string
  ngOnInit(): void {
    this.date = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate()

  }

}
