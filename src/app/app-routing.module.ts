import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { LogInComponent } from './components/forms/log-in/log-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { DeleteUserComponent } from './components/admin/delete-user/delete-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignOutUserComponent } from './components/signout/signout.component.';


const routes: Routes = [

  { path: '', component: BaseComponent, title: 'Angular' },
  { path: 'login', component: LogInComponent, title: 'Login' },
  { path: 'signup', component: SignUpComponent, title: 'Sifn Up' },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'signout', component: SignOutUserComponent, title: 'Signout' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutePaths { }
