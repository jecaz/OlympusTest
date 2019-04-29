import { Component, OnInit } from '@angular/core';
import {PlayItem} from '../../../../model/play-item.model';
import {PlaylistService} from '../../../../service/playlist.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['../../../../../styles/app-layout/profile-page/play-list/play-list.component.scss']
})
export class PlayListComponent implements OnInit {
  playlist: PlayItem[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlist = this.playlistService.getPlaylist();
  }
}
