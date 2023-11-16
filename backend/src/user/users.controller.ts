import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
import { PrismaService } from 'src/database/Prisma.service';

@Controller('user')
export class UsersController {
  constructor(private auth: UsersService, private prisma: PrismaService) {}

  @Get('auth')
  autenticate(@Body() body, @Res() res) {
    console.log(body);
    return this.auth.autenticate(body, res);
  }
  @Post('auth')
  postautenticate(@Body() body, @Res() res) {
    console.log(body);
    return this.auth.postautenticate(body, res);
  }

  @Get()
  async findAllUsers() {
    const users = await this.prisma.userModel.findMany();
    return users;
  }
}
