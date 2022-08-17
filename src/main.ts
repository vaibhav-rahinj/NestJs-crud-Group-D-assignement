import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages:false,
    whitelist:true,
    forbidNonWhitelisted:true
  }))
  // app.setGlobalPrefix('book');
  await app.listen(3003);
}
bootstrap();
