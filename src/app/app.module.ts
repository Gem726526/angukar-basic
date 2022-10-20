import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutePaths } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { LogInComponent } from './components/forms/log-in/log-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { NavigationService } from './services/router-back.services';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SignOutUserComponent } from './components/signout/signout.component.';



@NgModule({
  declarations: [
    AppComponent,


    SignUpComponent,
    LogInComponent,
    SignOutUserComponent,


    BaseComponent,






  ],
  imports: [
    BrowserModule,
    RoutePaths,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    DashboardModule,



  ],
  exports: [

  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
