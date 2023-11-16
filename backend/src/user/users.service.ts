import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  autenticate() {
    //verificar jwt
    return { message: 'ok' };
  }
  async joinUser(body) {
    await this.prisma.userModel.create({
      data: {
        ...body,
        staff: 'user',
      },
    });
    return { message: 'cadastrado com sucesso' };
  }
}
