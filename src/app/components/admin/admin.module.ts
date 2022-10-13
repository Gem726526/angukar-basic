import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.services';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [

    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,


  ],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UserService],
  bootstrap: []
})
export class AdminModule { }
