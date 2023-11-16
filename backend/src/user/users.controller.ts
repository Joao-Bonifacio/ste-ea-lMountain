import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { UsersJoinPipe } from 'src/pipes/users/user_join.pipe';
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
  @UsePipes(new UsersJoinPipe())
  postautenticate(@Body() body) {
    return this.auth.joinUser(body);
  }
}
