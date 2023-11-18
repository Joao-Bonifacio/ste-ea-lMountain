import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as cookieParser from 'cookie-parser';

const options: CorsOptions = {
  origin: [
    'http://172.29.45.36:3000',
    'http://localhost:3000',
    'http://129.168.1.115:3000',
  ],
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: options });
  app.use(cookieParser());
  await app.listen(8080);
}

bootstrap();
