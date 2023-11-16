import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  autenticate() {
    //verificar jwt
    return { message: 'ok' };
  }

  async joinUser(body) {
    const { name, email, password } = body;
    const salt = 12;
    const hash = await bcrypt.hash(password, salt);

    await this.prisma.userModel.create({
      data: { name, email, password: hash, staff: 'user' },
    });
    return { message: 'cadastrado com sucesso' };
  }
}
