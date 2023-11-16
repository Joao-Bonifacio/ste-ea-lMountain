import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  autenticate(req) {
    return JSON.stringify(req.headers);
  }
}
