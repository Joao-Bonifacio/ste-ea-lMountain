import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthServiceJWT } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/Prisma.service';

@Injectable()
export class HomeService {
  constructor(private jwt: AuthServiceJWT, private prisma: PrismaService) {}

  async getUserByToken(headers) {
    const { id } = await this.jwt.verifyToken(headers['cookie'].split('=')[1]);
    const user = await this.prisma.userModel.findUnique({
      where: { id },
    });
    return { ...user, password: undefined, staff: undefined };
  }
}
