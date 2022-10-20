import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.services';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminRoutePaths } from './admin.routing.module';


@NgModule({
  declarations: [

    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AdminComponent


  ],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminRoutePaths


  ],
  providers: [UserService],
  bootstrap: []
})
export class AdminModule { }
