import {Injectable} from '@angular/core';
import {BADGES} from '../olympus.data';
import {Badge} from '../model/badge.model';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  getBadges(): Badge[] {
    return BADGES;
  }
}
