import { Injectable } from '@nestjs/common';
import { UserStrore } from 'src/store/user-strore/user-strore';

@Injectable()
export class UserService {
  constructor(private readonly userStore: UserStrore) {}

  getall() {
    return this.userStore.get();
  }
}
