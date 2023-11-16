import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';

@Controller('user')
export class UsersController {
  constructor(private auth: UsersService) {}

  @Get('auth')
  autenticate() {
    return this.auth.autenticate();
  }
  @Post('join')
  postautenticate(@Body() body) {
    return this.auth.joinUser(body);
  }
}
