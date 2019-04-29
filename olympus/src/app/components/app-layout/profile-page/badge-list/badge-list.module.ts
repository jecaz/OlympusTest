import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BadgeListComponent} from './badge-list.component';
import {BadgeModule} from '../badge/badge.module';

@NgModule({
  declarations: [
    BadgeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BadgeModule
  ],
  providers: [],
  exports: [BadgeListComponent]
})
export class BadgeListModule {
}
