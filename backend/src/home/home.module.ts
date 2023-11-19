import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { AuthServiceJWT } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/database/Prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.KEY_JWT,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [HomeController],
  providers: [HomeService, AuthServiceJWT, PrismaService],
})
export class HomeModule {}
