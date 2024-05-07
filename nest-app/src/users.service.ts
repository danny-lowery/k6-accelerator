import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(userId: number): string {
    return `Hello ${userId} User!`;
  }
}
