import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  autenticate(body, res) {
    console.log(body);
    return res.status(201).stringify(body);
  }
  postautenticate(req, res) {
    return res.status(201).stringify(req);
  }
}
