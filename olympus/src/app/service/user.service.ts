import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {ACTIVE_USERS} from '../user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getActiveUsers(): User[] {
    return ACTIVE_USERS;
  }
}
