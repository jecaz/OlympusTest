import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PlayListComponent} from './play-list.component';
import {PlayItemModule} from '../play-item/play-item.module';

@NgModule({
  declarations: [
    PlayListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PlayItemModule
  ],
  providers: [],
  exports: [PlayListComponent]
})
export class PlayListModule {
}
