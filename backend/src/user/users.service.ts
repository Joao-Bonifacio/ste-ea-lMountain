import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.service';
import { AuthServiceJWT } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwt: AuthServiceJWT) {}

  async autenticate(req) {
    const verify = await this.jwt.verifyToken(req.cookie);
    return verify;
  }

  async loginUser(body, res) {
    const { email, password } = body;
    const user = await this.prisma.userModel.findUnique({
      where: { email },
    });
    const checkPasswd = await bcrypt.compare(password, user.password);
    if (!user || !checkPasswd) {
      throw new HttpException(
        'Usuário ou senha incorretos!',
        HttpStatus.FORBIDDEN,
      );
    }
    const payload = { id: user.id, name: user.name };
    const token = await this.jwt.genToken(payload);
    res.cookie('token', token);
    return res.send({ message: 'Login successful', user });
  }

  async joinUser(body, res) {
    const { name, email, password } = body;
    const userExists = await this.prisma.userModel.findFirst({
      where: { email },
    });
    const hash = await bcrypt.hash(password, Number(process.env.SALT));
    if (userExists) {
      throw new HttpException('Email já cadastrado!', HttpStatus.FORBIDDEN);
    }
    await this.prisma.userModel.create({
      data: { name, email, password: hash, staff: 'user' },
    });
    const { id } = await this.prisma.userModel.findUnique({
      where: { email },
    });
    const payload = { id, name };
    console.log(payload);
    const token = await this.jwt.genToken(payload);
    res.cookie('token', token, { httpOnly: true });
    return { message: 'cadastrado com sucesso' };
  }
}
