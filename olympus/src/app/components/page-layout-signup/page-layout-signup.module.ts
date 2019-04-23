import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PageLayoutSignupComponent} from './page-layout-signup.component';
import {RegisterModule} from './register/register.module';

@NgModule({
  declarations: [
    PageLayoutSignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RegisterModule
  ],
  providers: [],
  exports: [PageLayoutSignupComponent]
})
export class PageLayoutSignupModule {
}
