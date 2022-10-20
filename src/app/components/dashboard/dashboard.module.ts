import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.services';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    CardComponent,
    DashboardComponent,
    ChartComponent



  ],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule


  ],
  providers: [UserService],
  bootstrap: []
})
export class DashboardModule { }
