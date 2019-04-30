import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';
import {BadgeListModule} from './badge-list/badge-list.module';
import {PlayListModule} from './play-list/play-list.module';
import {PhotoListModule} from './photo-list/photo-list.module';
import {ActorVoteListModule} from './actor-vote-list/actor-vote-list.module';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BadgeListModule,
    PlayListModule,
    PhotoListModule,
    ActorVoteListModule
  ],
  providers: [],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule {
}
