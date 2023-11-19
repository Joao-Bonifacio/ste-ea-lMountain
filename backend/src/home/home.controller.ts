import { Controller, Get, Headers } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private home: HomeService) {}
  @Get()
  getUserByToken(@Headers() headers) {
    return this.home.getUserByToken(headers);
  }
}
