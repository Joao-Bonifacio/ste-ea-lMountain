import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Req,
  Res,
  UsePipes,
} from '@nestjs/common';
import { UserLoginPipe, UsersJoinPipe } from 'src/pipes/users/user.pipe';
import { UsersService } from 'src/user/users.service';

@Controller('user')
export class UsersController {
  constructor(private user: UsersService) {}

  @Get('auth')
  autenticate(@Headers() headers, @Res({ passthrough: true }) res: Response) {
    return this.user.autenticate(headers, res);
  }
  @Post('login')
  @UsePipes(new UserLoginPipe())
  loginUser(@Body() body, @Res() res) {
    return this.user.loginUser(body, res);
  }
  @Post('join')
  @UsePipes(new UsersJoinPipe())
  postautenticate(@Body() body, @Res() res) {
    return this.user.joinUser(body, res);
  }
  @Get('logout')
  logout(@Req() req, @Headers() headers, @Res() res) {
    console.log(req, '\n');
    console.log(headers);
    res.clearCookie('token', { httpOnly: true /*, path: '/'*/ });
    return { message: 'Deslogado' };
  }
}
