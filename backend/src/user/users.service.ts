import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  autenticate() {
    return true || false;
  }
}
