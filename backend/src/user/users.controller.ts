import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
import { PrismaService } from 'src/database/Prisma.service';

@Controller('user')
export class UsersController {
  constructor(private auth: UsersService, private prisma: PrismaService) {}

  @Get('auth')
  autenticate(@Req() req) {
    console.log(req.body);
    return this.auth.autenticate(req);
  }

  @Get()
  async findAllUsers() {
    const users = await this.prisma.userModel.findMany();
    return users;
  }
}
