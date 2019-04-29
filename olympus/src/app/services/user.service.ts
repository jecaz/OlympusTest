import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {ACTIVE_USERS} from '../olympus.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getActiveUsers(): User[] {
    return ACTIVE_USERS;
  }
}
