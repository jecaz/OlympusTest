import { Component, OnInit } from '@angular/core';
import {Photo} from '../../../../../models/photo.model';
import {PhotoService} from '../../../../../services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/last-photos-article/photo-list/photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photos = this.photoService.getPhotos();
  }
}
