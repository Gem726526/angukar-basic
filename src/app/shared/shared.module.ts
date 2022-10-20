import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { TopNavComponent } from '../components/nav/top-nav/top-nav.component';
import { BackButtonDirective } from '../directives/back-button.directive';





@NgModule({
  declarations: [

    NavComponent,
    BackButtonDirective,
    TopNavComponent
  ],
  imports: [
    RouterModule

  ],
  exports: [NavComponent,
    BackButtonDirective,
    TopNavComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
