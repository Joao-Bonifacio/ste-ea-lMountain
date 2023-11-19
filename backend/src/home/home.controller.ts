import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { HomeService } from './home.service';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller('home')
export class HomeController {
  constructor(private home: HomeService) {}

  @Get()
  @UseGuards(JwtGuard)
  getUserByToken(@Headers('token') token: string) {
    return this.home.getUserByToken(token);
  }
}
