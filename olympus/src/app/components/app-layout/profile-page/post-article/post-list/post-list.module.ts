import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ArticleCardModule} from '../../../../../common/article-card/article-card.module';
import {PostListComponent} from './post-list.component';
import {PostModule} from '../post/post.module';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PostModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [PostListComponent]
})
 export class PostListModule {
}
