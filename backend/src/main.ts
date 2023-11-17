import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

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
  await app.listen(8080);
}

bootstrap();
