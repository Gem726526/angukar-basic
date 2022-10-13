import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './components/admin/admin.component';
import { RoutePaths } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { LogInComponent } from './components/forms/log-in/log-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminModule } from './components/admin/admin.module';
import { NavigationService } from './services/router-back.services';
import { BackButtonDirective } from './directives/back-button.directive';

@NgModule({
  declarations: [
    AppComponent,


    SignUpComponent,
    LogInComponent,


    BaseComponent,

    AdminComponent,
    NavComponent,
    BackButtonDirective

  ],
  imports: [
    BrowserModule,
    RoutePaths,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,


  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
