import { Component, OnInit } from '@angular/core';
import {Badge} from '../../../../model/badge.model';
import {BadgeService} from '../../../../service/badge.service';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['../../../../../styles/app-layout/profile-page/badge-list/badge-list.component.scss']
})
export class BadgeListComponent implements OnInit {
  badges: Badge[];

  constructor(private badgeService: BadgeService) { }

  ngOnInit() {
    this.badges = this.badgeService.getBadges();
  }
}
