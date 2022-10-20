import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: AdminComponent, title: 'Admin' },
  { path: 'addUser', component: AddUserComponent, title: 'Adduser' },
  { path: 'editUser/:id', component: EditUserComponent, title: 'EditUser' },
  { path: 'deleteUser/:id', component: DeleteUserComponent, title: 'DeleteUser' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutePaths { }
