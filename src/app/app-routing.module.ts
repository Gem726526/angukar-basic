import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BaseComponent } from './components/base/base.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { LogInComponent } from './components/forms/log-in/log-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { DeleteUserComponent } from './components/admin/delete-user/delete-user.component';

const routes: Routes = [

  { path: '', component: BaseComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addUser', component: AddUserComponent },
  {path: 'editUser/:id', component: EditUserComponent},
  {path: 'deleteUser/:id', component: DeleteUserComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutePaths { }
