import { Injectable } from '@nestjs/common';
import { AuthServiceJWT } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/Prisma.service';

@Injectable()
export class HomeService {
  constructor(private jwt: AuthServiceJWT, private prisma: PrismaService) {}

  async getUserByToken(requestToken) {
    const token = JSON.parse(requestToken).value;
    const { id } = await this.jwt.verifyToken(token);
    const user = await this.prisma.userModel.findUnique({
      where: { id },
    });
    return { ...user, password: undefined, staff: undefined };
  }
}
