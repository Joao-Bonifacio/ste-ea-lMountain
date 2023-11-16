import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  autenticate() {
    //verificar jwt
    return { message: 'ok' };
  }

  async loginUser(body) {
    const { email, password } = body;
    const user = await this.prisma.userModel.findUnique({
      where: {
        email,
      },
    });
    const checkPasswd = await bcrypt.compare(password, user.password);
    if (!user || !checkPasswd) {
      throw new HttpException(
        'Usuário ou senha incorretos!',
        HttpStatus.FORBIDDEN,
      );
    }
    return user;
  }

  async joinUser(body) {
    const { name, email, password } = body;
    const userExists = await this.prisma.userModel.findFirst({
      where: {
        email,
      },
    });
    const hash = await bcrypt.hash(password, Number(process.env.SALT));

    if (userExists) {
      throw new HttpException('Email já cadastrado!', HttpStatus.FORBIDDEN);
    }

    await this.prisma.userModel.create({
      data: { name, email, password: hash, staff: 'user' },
    });
    return { message: 'cadastrado com sucesso' };
  }
}
