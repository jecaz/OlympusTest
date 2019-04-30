import {User} from './models/user.model';
import {Badge} from './models/badge.model';
import {PlayItem} from './models/play-item.model';
import {Photo} from "./models/photo.model";
import {ActorVote} from "./models/actor-vote.model";

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
export const PLAYLIST: PlayItem[] = [
  new PlayItem({
    id: 1,
    song: 'The Past Starts Slow...',
    icon: '../../../../assets/images/playlist-icons/stars.jpg',
    singer: 'System of a Revenge',
    songDuration: '3:22'
  }),
  new PlayItem({
    id: 2,
    song: 'The Pretender',
    icon: '../../../../assets/images/playlist-icons/kung-fighters.jpg',
    singer: 'Kung Fighters',
    songDuration: '5:48'
  }),
  new PlayItem({
    id: 3,
    song: 'Blood Brothers',
    icon: '../../../../assets/images/playlist-icons/iron-maid.jpg',
    singer: 'Iron Maid',
    songDuration: '3:06'
  }),
  new PlayItem({
    id: 4,
    song: 'Seven Nation Army',
    icon: '../../../../assets/images/playlist-icons/black-stripes.jpg',
    singer: 'The Black Stripes',
    songDuration: '3:06'
  }),
  new PlayItem({
    id: 5,
    song: 'Killer Queen',
    icon: '../../../../assets/images/playlist-icons/archiduke.jpg',
    singer: 'The Black Stripes',
    songDuration: '3:06'
  })
];
export const PHOTOS: Photo[] = [
  new Photo({
    id: 1,
    icon: '../../../../assets/images/last-photos/lake.jpg'
  }),
  new Photo({
    id: 2,
    icon: '../../../../assets/images/last-photos/beach.jpg'
  }),
  new Photo({
    id: 3,
    icon: '../../../../assets/images/last-photos/travel-friends.jpeg'
  }),
  new Photo({
    id: 4,
    icon: '../../../../assets/images/last-photos/freedom.jpg'
  }),
  new Photo({
    id: 5,
    icon: '../../../../assets/images/last-photos/fly.jpg'
  }),
  new Photo({
    id: 6,
    icon: '../../../../assets/images/last-photos/baloon.jpg'
  }),
  new Photo({
    id: 7,
    icon: '../../../../assets/images/last-photos/off-the-path.jpg'
  }),
  new Photo({
    id: 8,
    icon: '../../../../assets/images/last-photos/nature.jpg'
  }),
  new Photo({
    id: 9,
    icon: '../../../../assets/images/last-photos/pool.jpg'
  })
];
export const ACTOR_VOTERS: ActorVote[] = [
  new ActorVote({
    id: 1,
    actor: 'Thomas Bale',
    votePercentage: 62,
    voters: [
      '../../../../assets/images/users/user1.png',
      '../../../../assets/images/users/user2.png',
      '../../../../assets/images/users/user3.png',
      '../../../../assets/images/users/user4.png',
      '../../../../assets/images/users/user5.png',
      '../../../../assets/images/users/user6.png',
      '../../../../assets/images/users/user7.png',
      '../../../../assets/images/users/user8.png',
      '../../../../assets/images/users/user14.png',
      '../../../../assets/images/users/user10.png',
      '../../../../assets/images/users/user11.png',
      '../../../../assets/images/users/user12.png'
    ]
  }),
  new ActorVote({
    id: 2,
    actor: 'Ben Robertson',
    votePercentage: 27,
    voters: [
      '../../../../assets/images/users/user7.png',
      '../../../../assets/images/users/user15.png',
      '../../../../assets/images/users/user14.png',
      '../../../../assets/images/users/user4.png',
      '../../../../assets/images/users/user10.png',
      '../../../../assets/images/users/user11.png',
      '../../../../assets/images/users/user12.png'
    ]
  }),
  new ActorVote({
    id: 3,
    actor: 'Michael Streiton',
    votePercentage: 11,
    voters: [
      '../../../../assets/images/users/user9.png',
      '../../../../assets/images/users/user13.png'
    ]
  })
];
