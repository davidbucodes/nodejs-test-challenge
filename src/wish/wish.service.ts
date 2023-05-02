import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/keyValueDatabase/keyValueDatabase.service';
import { UserService } from 'src/user/user.service';
import { CreateWishDto as SendWishDto, Wish } from 'src/wish/wish.types';

@Injectable()
export class WishService {
  constructor(
    private readonly userService: UserService,
    private readonly databaseService: DatabaseService,
  ) {}

  async createWish(createWishRequest: SendWishDto) {
    const { data: users } = await this.userService.getUsers();
    const { data: userProfiles } = await this.userService.getUserProfiles();

    const user = users.find((user) => user.username === createWishRequest.name);
    if (!user) {
      throw new Error(
        "You're are not registered, so we could not deliver you wish.",
      );
    }

    const userProfile = userProfiles.find(
      (profile) => profile.userUid === user.uid,
    );

    const age = this.userService.calculateAge(userProfile.birthdate);
    if (age >= 10) {
      throw new Error('Sending a wish allowed under 10 years old.');
    }

    const wish: Wish = {
      name: user.username,
      address: userProfile.address,
      wish: createWishRequest.wish,
    };

    const wishes = this.databaseService.get<Wish[]>('wishes') || [];
    this.databaseService.set<Wish[]>('wishes', [...wishes, wish]);
  }

  getCreateWishErrorViewName() {
    return 'wish/create/error';
  }

  getCreateWishSuccessViewName() {
    return 'wish/create/success';
  }
}
