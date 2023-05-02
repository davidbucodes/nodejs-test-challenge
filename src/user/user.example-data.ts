import { User, UserProfile } from 'src/user/user.types';

export const users: User[] = [
  {
    username: 'charlie.brown',
    uid: '730b0412-72c7-11e9-a923-1681be663d3e',
  },
  {
    username: 'james.bond',
    uid: '730b06a6-72c7-11e9-a923-1681be663d3e',
  },
  {
    username: 'bugs.bunny',
    uid: '730b0804-72c7-11e9-a923-1681be663d3e',
  },
];

export const userProfiles: UserProfile[] = [
  {
    userUid: '730b0412-72c7-11e9-a923-1681be663d3e',
    address: '219-1130, Ikanikeisaiganaibaai, Musashino-shi, Tokyo',
    birthdate: '2017/12/05',
  },
  {
    userUid: '730b06a6-72c7-11e9-a923-1681be663d3e',
    address: '365-1095, Minowada, Shirataka-machi Nishiokitama-gun, Yamagata',
    birthdate: '1987/01/01',
  },
  {
    userUid: '730b0804-72c7-11e9-a923-1681be663d3e',
    address: '292-1082, Yodacho, Obihiro-shi, Hokkaido',
    birthdate: '2010/23/01',
  },
];
