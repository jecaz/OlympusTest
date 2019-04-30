import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ActorVoteListComponent} from './actor-vote-list.component';
import {ActorVoteModule} from '../actor-vote/actor-vote.module';

@NgModule({
  declarations: [
    ActorVoteListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ActorVoteModule
  ],
  providers: [],
  exports: [ActorVoteListComponent]
})
export class ActorVoteListModule {
}
