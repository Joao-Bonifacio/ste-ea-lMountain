import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [UsersModule, HomeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
