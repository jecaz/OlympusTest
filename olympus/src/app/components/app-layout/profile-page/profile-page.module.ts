import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';
import {BadgeListModule} from './badge-article/badge-list/badge-list.module';
import {PlayListModule} from './playlist-article/play-list/play-list.module';
import {PhotoListModule} from './last-photos-article/photo-list/photo-list.module';
import {ActorVoteListModule} from './actor-vote-article/actor-vote-list/actor-vote-list.module';
import {PostListModule} from './post-article/post-list/post-list.module';

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
    ActorVoteListModule,
    PostListModule
  ],
  providers: [],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule {
}
