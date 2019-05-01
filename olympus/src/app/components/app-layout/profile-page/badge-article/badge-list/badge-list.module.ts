import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BadgeListComponent} from './badge-list.component';
import {BadgeModule} from '../badge/badge.module';
import {ArticleCardModule} from '../../../../../common/article-card/article-card.module';

@NgModule({
  declarations: [
    BadgeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BadgeModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [BadgeListComponent]
})
export class BadgeListModule {
}
