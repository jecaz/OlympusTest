import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PhotoListComponent} from './photo-list.component';
import {PhotoModule} from '../photo/photo.module';

@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PhotoModule
  ],
  providers: [],
  exports: [PhotoListComponent]
})
export class PhotoListModule {
}
