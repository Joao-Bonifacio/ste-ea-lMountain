import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';

@Controller('user')
export class UsersController {
  constructor(private auth: UsersService) {}

  @Get('auth')
  autenticate() {
    return this.auth.autenticate();
  }
  @Post('login')
  loginUser(@Body() body) {
    return this.auth.loginUser(body);
  }
  @Post('join')
  postautenticate(@Body() body) {
    return this.auth.joinUser(body);
  }
}
