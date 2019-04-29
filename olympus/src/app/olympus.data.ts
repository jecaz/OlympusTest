import {User} from './model/user.model';
import {Badge} from './model/badge.model';

export const ACTIVE = '#2ADC89';
export const AWAY = '#FFDF5C';
export const INVISIBLE = '#B2F3C1';
export const DO_N0T_DISTURB = '#F94F4F';
export const ACTIVE_USERS: User[] = [
  new User({
    id: 1,
    username: 'Marko',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar1.png',
    city: null,
    country: null,
    state: ACTIVE
  }),
  new User({
    id: 2,
    username: 'Marija',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar2.png',
    city: null,
    country: null,
    state: ACTIVE
  }),
  new User({
    id: 3,
    username: 'Petar',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar3.png',
    city: null,
    country: null,
    state: ACTIVE
  }),
  new User({
    id: 4,
    username: 'Dejan',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar4.png',
    city: null,
    country: null,
    state: AWAY
  }),
  new User({
    id: 5,
    username: 'Jelena',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar5.png',
    city: null,
    country: null,
    state: DO_N0T_DISTURB
  }),
  new User({
    id: 6,
    username: 'Nikolina',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar6.png',
    city: null,
    country: null,
    state: ACTIVE
  }),
  new User({
    id: 7,
    username: 'Biljana',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar7.png',
    city: null,
    country: null,
    state: ACTIVE
  }),
  new User({
    id: 8,
    username: 'Nenad',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar8.png',
    city: null,
    country: null,
    state: AWAY
  }),
  new User({
    id: 9,
    username: 'Anonymous',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar9.png',
    city: null,
    country: null,
    state: INVISIBLE
  }),
  new User({
    id: 10,
    username: 'Nenad',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar8.png',
    city: null,
    country: null,
    state: AWAY
  }),
  new User({
    id: 11,
    username: 'Biljana',
    nickname: null,
    profileIcon: '../../../assets/images/active-user-profile/avatar7.png',
    city: null,
    country: null,
    state: ACTIVE
  }),
];
export const BADGES: Badge[] = [
  new Badge({
    id: 1,
    name: 'bolt',
    icon: '../../../../assets/images/logo.png',
    notification: 2
  }),
  new Badge({
    id: 2,
    name: 'camera',
    icon: '../../../../assets/images/badge-icons/camera.png',
    notification: 0
  }),
  new Badge({
    id: 3,
    name: 'smile',
    icon: '../../../../assets/images/badge-icons/smile.png',
    notification: 4
  }),
  new Badge({
    id: 4,
    name: 'edit',
    icon: '../../../../assets/images/badge-icons/edit.png',
    notification: 0
  }),
  new Badge({
    id: 5,
    name: 'friend',
    icon: '../../../../assets/images/active-user-profile/avatar8.png',
    notification: 0
  }),
  new Badge({
    id: 6,
    name: 'task',
    icon: '../../../../assets/images/badge-icons/task.png',
    notification: 0
  }),
  new Badge({
    id: 7,
    name: 'cd',
    icon: '../../../../assets/images/badge-icons/cd.png',
    notification: 0
  }),
  new Badge({
    id: 8,
    name: 'calendar',
    icon: '../../../../assets/images/badge-icons/calendar.png',
    notification: 2
  }),
  new Badge({
    id: 9,
    name: 'rocket',
    icon: '../../../../assets/images/badge-icons/rocket.png',
    notification: 0
  }),
  new Badge({
    id: 10,
    name: 'coffee',
    icon: '../../../../assets/images/badge-icons/coffee.png',
    notification: 0
  })
];
