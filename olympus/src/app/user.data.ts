import {User} from './model/user.model';

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
