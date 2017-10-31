import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];
  constructor() {
    this.users = [
      new User('Joonas', 'Suutari'),
      new User('Joku', 'Muu'),
      new User('Kolmas', 'Käyttäjä')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}
