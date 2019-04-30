import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ActorVoteListComponent} from './actor-vote-list.component';
import {ActorVoteModule} from '../actor-vote/actor-vote.module';
import {ArticleCardModule} from '../../../../common/article-card/article-card.module';

@NgModule({
  declarations: [
    ActorVoteListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ActorVoteModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [ActorVoteListComponent]
})
export class ActorVoteListModule {
}
