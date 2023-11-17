import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/Prisma.service';
import { AuthServiceJWT } from 'src/auth/auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.KEY_JWT,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AuthServiceJWT],
})
export class UsersModule {}
