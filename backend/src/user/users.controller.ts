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
  @Post('logout')
  logout(@Headers() headers, @Res() res) {
    const faketoken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkMjAyMjY4LWRhOWMtNDYxYi1hYzZhLTBjMGI0MDQ4YWEwOCIsIm5hbWUi2iJKbuOjbyBKw7puaW9yIiwiaWF0IooxNzAwNjkzOTU1LCJleHAiujE3MDA3ODAzNTV9.FLVwLFNYIOP4zFW7hEyfJPi57gh3lmKMLxww97YAvqa';
    console.log(headers);
    res.cookie('token', faketoken, { httpOnly: true });
    return res.json({ message: 'Deslogado' });
  }
}
