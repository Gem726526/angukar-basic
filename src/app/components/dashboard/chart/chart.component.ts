import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/interface";
import { UserService } from "src/app/services/user.services";
import { Chart, registerables } from "chart.js";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'

})

export class ChartComponent implements OnInit {
  constructor(private userList: UserService) { }
  userData: User[]
  xLabel: string[] = []
  yLabel: number[] = []
  chartDatas: any = {}

  ngOnInit() {
    this.chartData()
    this.chartDisplay()
  }
  ngAfterContentInit() {
  }
  chartData() {
    this.userData = this.userList.getUsers()
    console.log(this.xLabel)
    this.userData.forEach((User, i) => {
      this.xLabel.push(this.userData[i].name);
      this.yLabel.push(i + 1);

    });

  }
  chartMaker(canvasElement: any, chartType: any) {
    Chart.register(...registerables)
    new Chart(canvasElement, {
      type: chartType,
      data: {
        labels: this.xLabel,
        datasets: [
          {
            label: "Index of User",
            data: this.yLabel,
            backgroundColor: [
              "#caf0f8",
              "#90e0ef",
              "#00b4d8",
              "#83c5be",
              "#0096c7",
              "#f7ede2",
            ],

            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: "#0a2558",
            hoverBackgroundColor: "#0a2558",
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: false,

          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },

        scales: {
          y: {
            ticks: {
              display: true,
            },
          },
        },
      },
    });

  }
  chartDisplay() {
    console.log(this.chartDatas.xLabel)
    this.chartMaker('bar-chart', "bar")
  }


}
